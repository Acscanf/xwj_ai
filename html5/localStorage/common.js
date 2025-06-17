// 获取DOM元素
// 获取添加项目的表单元素
const addItems = document.querySelector('.add-items');
// 获取显示项目列表的元素
const itemsList = document.querySelector('.plates');
// 从本地存储获取项目数据，如果没有则初始化为空数组
let items = JSON.parse(localStorage.getItem('tapasItems')) || [];

// 添加新项目函数
function addItem(e) {
  // 阻止表单默认提交行为
  e.preventDefault();
  // 获取输入框中的文本值
  const text = this.querySelector('[name=item]').value;
  // 创建新项目对象
  const item = {
    text,        // 项目文本
    done: false  // 完成状态初始为false
  };
  // 将新项目添加到数组中
  items.push(item);
  // 更新列表显示
  populateList(items, itemsList);
  // 将更新后的数组保存到本地存储
  localStorage.setItem('tapasItems', JSON.stringify(items));
  // 重置表单
  this.reset();
}

// 渲染项目列表函数
function populateList(plates = [], platesList) {
  // 使用map方法将数组转换为HTML字符串
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <!-- 复选框，绑定data-index属性用于标识项目索引 -->
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}>
        <!-- 项目文本标签 -->
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join(''); // 将数组转换为字符串
}

// 切换项目完成状态函数
function toggleDone(e) {
  // 如果点击的不是input元素则直接返回
  if (!e.target.matches('input')) return;
  // 获取被点击元素的data-index属性值
  const el = e.target;
  const index = el.dataset.index;
  // 切换项目的完成状态
  items[index].done = !items[index].done;
  // 更新本地存储
  localStorage.setItem('tapasItems', JSON.stringify(items));
  // 重新渲染列表
  populateList(items, itemsList);
}

// 添加事件监听器
// 表单提交事件 - 添加新项目
addItems.addEventListener('submit', addItem);
// 列表点击事件 - 切换项目完成状态
itemsList.addEventListener('click', toggleDone);

// 初始化加载 - 页面加载时渲染已有项目
populateList(items, itemsList);