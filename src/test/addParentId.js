
/**
 * @description
 * 给定一个数组，每个item里面可能存在children， 
 * children也是一个数组，
 * children下的item也可能存在children，
 * 依次循环
 * 要求：将children中的item加上parentId，
 * parentId为其父元素的id
 * @param {Array} o 需要替换的变量
 */
function addParentId(o) {
  let cloneObj = JSON.parse(JSON.stringify(o));

  let newObj = factoryial(cloneObj, null);

  return newObj;

  function factoryial(obj, parent) {
    for (let i = 0; i < obj.length; i++) {
      if (parent) {
        obj[i].parentId = parent.id;
      }
      if (obj[i].children) {
        for (let j = 0; j < obj[i].children.length; j++) {
          factoryial(obj[i].children, obj[i]);
        }
      }
    } 
    return obj;
  }
}


let obj = [{
  id: 1,
  label: '父1',
  children: [{
    id: 2,
    label: '子1'
  }, {
    id: 3,
    label: '子2',
    children: [{
      id: 31,
      label: '子2子',
      children: [{
        id: 311,
        label: '子2子12'
      }]
    }]
  }, {
    id: 4,
    label: '子3'
  }, ]
}, {
  id: 5,
  label: '父2',
  children: [{
    id: 6,
    label: '子4'
  }, {
    id: 7,
    label: '子5'
  }, {
    id: 8,
    label: '子6'
  }, ]
}]
console.log(addParentId(obj));