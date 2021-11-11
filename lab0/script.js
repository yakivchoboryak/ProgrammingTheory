const classNames = {
  TODO_ITEM: "todo-container",
  TODO_COUNTER: "todo-counter",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");
const taskInput = document.getElementById("task-example-input");

var taskList = [];

function newTodo() {
  number = taskList.length;
  if (taskInput.value != "") {
    for (i = 0; i < taskList.length - 1; i++) {
      if (taskList[i + 1].num - taskList[i].num > 1) {
        taskList.splice(taskList[i].num + 1, 0, addElem(taskList[i].num + 1));
        restructure();
        return;
      }
    }
    if (taskList.length == 1 && taskList[0].num != 0) {
      taskList.splice(0, 0, addElem(0));
      restructure();
      return;
    }
    taskList.push(addElem(number));
    restructure();
  }
}

function addElem(number) {
  state = ``;
  var a = {
    id: number,
    num: number,
    checked: state,
    item: ``,
  };
  return a;
}

function changeHtml() {
  taskList.forEach((element) => {
    element.item = `<li class=${classNames.TODO_ITEM}>
  <tr>
    <td class = ${classNames.TODO_COUNTER}>${element.num + 1}</td>
    <td class=${classNames.TODO_TEXT}>
      ${taskInput.value}
    </td>
    <td>
      <input type="checkbox" id ="${element.id}" class="${
      classNames.TODO_CHECKBOX
    }" onClick ="checkboxes(this);" ${element.checked}>
    </td>
    <td>
      <button class=${classNames.TODO_DELETE}  onClick = "deleteItem(${
      element.num
    })  ">
        Delete
      </button>
    </td>
  </tr>

</li>`;
  });
}

function deleteItem(counter) {
  taskList.splice(parseInt(counter, 10), 1);
  restructure();
}

function restructure() {
  changeHtml();
  list.innerHTML = "";
  taskList.forEach((element) => {
    list.innerHTML += element.item;
  });
  itemCountSpan.innerHTML = taskList.length;
  countUnchecked();
}

function checkboxes(element) {
  var inputElems = document.getElementsByClassName(classNames.TODO_CHECKBOX);
  for (var i = 0; i < inputElems.length; i++) {
    if (taskList[i].id == element.id) {
      taskList[i].checked = taskList[i].checked == `checked` ? "" : `checked`;
      restructure();
    }
  }
}

function countUnchecked() {
  var inputElems = document.getElementsByClassName(classNames.TODO_CHECKBOX),
    count = 0;
  for (var i = 0; i < inputElems.length; i++) {
    if (inputElems[i].type === "checkbox" && inputElems[i].checked === false) {
      count++;
    }
  }
  uncheckedCountSpan.innerHTML = count;
}
