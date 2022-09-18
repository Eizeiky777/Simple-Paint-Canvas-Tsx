import { ShapeButtonInterface } from "../interface/shape-button.interface";
import "../css/animation.css";

export const ListButtons = (data: ShapeButtonInterface) => {
  const {
    addRectangle,
    addTriangle,
    addCircle,
    addLine,
    deleteFabricObj,
    canvas,
    fabricObj,
  } = data;

  return (
    <>
      <button
        onClick={() => addRectangle(canvas)}
        style={{
          width: 100,
          height: 30,
          fontFamily: "Roboto, sans-serif",
          fontWeight: "normal",
          backgroundColor: "yellow",
          cursor: "pointer",
          borderColor: "yellow",
        }}
      >
        Rectangle
      </button>
      <button
        onClick={() => addTriangle(canvas)}
        style={{
          width: 100,
          height: 30,
          fontFamily: "Roboto, sans-serif",
          fontWeight: "normal",
          backgroundColor: "orange",
          cursor: "pointer",
          borderColor: "orange",
        }}
      >
        Triangle
      </button>
      <button
        onClick={() => addCircle(canvas)}
        style={{
          width: 100,
          height: 30,
          fontFamily: "Roboto, sans-serif",
          fontWeight: "normal",
          backgroundColor: "lightblue",
          cursor: "pointer",
          borderColor: "lightblue",
        }}
      >
        Circle
      </button>
      <button
        onClick={() => addLine(canvas)}
        style={{
          width: 100,
          height: 30,
          fontFamily: "Roboto, sans-serif",
          fontWeight: "normal",
          backgroundColor: "lightcyan",
          borderColor: "lightcyan",
          cursor: "pointer",
        }}
      >
        Draw Line
      </button>
      <button
        onClick={() => deleteFabricObj(canvas, fabricObj)}
        style={{
          width: 100,
          height: 30,
          fontFamily: "Roboto, sans-serif",
          fontWeight: "normal",
          backgroundColor: "red",
          cursor: "pointer",
          borderColor: "red",
        }}
      >
        Delete
      </button>
    </>
  );
};
