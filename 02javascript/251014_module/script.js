console.log("script.js 시작");
export const a = 10;
const b = 10;

const han = () => {
  console.log("안녕하세요!");
};

export { b };
export { han };
//  export { a }; // Duplicate export of 'a'
export default han;
