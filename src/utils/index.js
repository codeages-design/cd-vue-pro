// 对象深拷贝
export const deepCopy = obj => {
  if (typeof obj !== "object") {
    return obj;
  }

  const newObj = {};

  for (let key in obj) {
    newObj[key] = deepCopy(obj[key]);
  }

  return newObj;
};
