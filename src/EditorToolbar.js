export const modules = {
  toolbar: [
    // font 
    [{ font: [] }],

    // [{ headers: "1" }, { headers: "2" }],

    // size
    [{ size: ["small", false, "large", "huge"] }],

    // customize the text format
    ["bold", "italic", "underline", "strike", "blockquote", "code-block"],

    // add color and background color
    [{ color: [] }, { background: [] }],

    // list
    [{ list: "ordered" }, { list: "bullet" }, { align: [] }],

    // script
    [{ script: "sub" }, { script: "super" }],

    // indentation
    [{ indent: "-1" }, { indent: "+1" }],

    ["link", "image", "video",],

    ["clean"]
  ],

  history: {
    delay: 1000, // changes occuring within the delay number of milliseconds will be bundled
    maxStack: 200, // maximum size of history's undo/redo stack
    userOnly: true
  }
};
