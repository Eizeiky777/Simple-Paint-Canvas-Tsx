import { fabric } from "fabric";
import { ListTableColors } from "../component/list-colors";
import { useEffect, useState } from "react";

import "../css/animation.css";

const sampleImgUrl1 =
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80";

export const Painters = () => {
  const [canvas, setCanvas] = useState(new fabric.Canvas(null));
  const [imgURL, setImgURL] = useState("");
  const [draw, setDrawing] = useState(true);

  const [rect, setRect] = useState(new fabric.Rect({}));
  const [rectColor, setRectColor] = useState("");

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const initCanvas = (): fabric.Canvas => {
    const cvs = new fabric.Canvas("canvas", {
      height: 800,
      width: 800,
      backgroundColor: "pink",
      isDrawingMode: false,
      freeDrawingCursor: "crosshair",
    });

    fabric.Image.fromURL(sampleImgUrl1, (img: fabric.Image) => {
      img.scale(0.75);
      cvs.add(img);
      cvs.renderAll();
    });

    setCanvas(cvs);
    return cvs;
  };

  const addRectangle = (canvi: fabric.Canvas): void => {
    const shape = new fabric.Rect({
      height: 200,
      width: 200,
      fill: "yellow",
    });

    canvi.add(shape);
    canvi.renderAll();

    setRect(shape);
  };

  const addCircle = (canvi: fabric.Canvas): void => {
    const shape = new fabric.Circle({
      radius: 50,
      fill: "blue",
      stroke: "blue",
      strokeWidth: 3,
    });

    canvi.add(shape);
    canvi.renderAll();
  };

  const addTriangle = (canvi: fabric.Canvas): void => {
    const shape = new fabric.Triangle({
      height: 200,
      width: 200,
      fill: "orange",
      stroke: "orange",
      strokeWidth: 3,
    });

    canvi.add(shape);
    canvi.renderAll();
  };

  const addLine = (canvi: fabric.Canvas): void => {
    const shape = new fabric.Line([50, 100, 200, 200], {
      left: 170,
      top: 150,
      stroke: "red",
    });

    canvi.add(shape);
    canvi.renderAll();
  };

  const deleteRect = (canvi: fabric.Canvas, shape: fabric.Rect): void => {
    canvi.remove(shape);
    canvi.renderAll();
  };

  const addImg = (
    e: React.FormEvent<HTMLFormElement>,
    url: string,
    canvi: fabric.Canvas
  ): void => {
    e.preventDefault();
    fabric.Image.fromURL(url, (img: fabric.Image) => {
      img.scale(0.75);
      canvi.add(img);
      canvi.renderAll();
      setImgURL("");
    });
  };

  const startDrawing = (canvi: fabric.Canvas, isDrawing: boolean): void => {
    canvi.isDrawingMode = isDrawing;
    canvi.freeDrawingCursor = "crosshair";
    setDrawing(!isDrawing);
  };

  const changeColorRect = (
    canvi: fabric.Canvas,
    shape: fabric.Rect,
    newColor: string
  ) => {
    shape.set("fill", newColor);
    canvi.add(shape);
    canvi.renderAll();
  };

  console.log("RerenderChecking");

  return (
    <>
      <h1 style={{ fontFamily: "Roboto, sans-serif" }} className="title-anim-0">
        Let's Painting
      </h1>
      <div style={{ display: "flex" }}>
        <div>
          <canvas id="canvas" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              maxWidth: 800,
              marginTop: "5px",
            }}
          >
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
              onClick={() => deleteRect(canvas, rect)}
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
            <form onSubmit={(e) => addImg(e, imgURL, canvas)}>
              <div>
                <input
                  type="text"
                  value={imgURL}
                  placeholder="please input your url image :)"
                  onChange={(e) => setImgURL(e.target.value)}
                  style={{ width: 250, height: 23, marginRight: "5px" }}
                />
                <button
                  style={{
                    width: 100,
                    height: 30,
                    fontFamily: "Roboto, sans-serif",
                  }}
                  type="submit"
                >
                  Add Image
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <button
            onClick={() => startDrawing(canvas, draw)}
            style={{
              width: 100,
              height: 30,
              fontFamily: "Roboto, sans-serif",
              fontWeight: "normal",
              backgroundColor: "lightcyan",
              borderColor: "lightcyan",
              cursor: "pointer",
              marginLeft: "5px",
            }}
          >
            Free Drawing
          </button>
          <button
            onClick={() => changeColorRect(canvas, rect, rectColor)}
            style={{
              width: 140,
              height: 30,
              fontFamily: "Roboto, sans-serif",
              fontWeight: "normal",
              backgroundColor: "lightcyan",
              borderColor: "lightcyan",
              cursor: "pointer",
              marginLeft: "5px",
            }}
          >
            Change Colour
          </button>
          <ListTableColors setRectColor={setRectColor} />

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
              marginLeft: "5px",
              marginTop: "15px",
            }}
          >
            Draw Line
          </button>
        </div>
      </div>
    </>
  );
};

// for testing
// https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80

// notes:
// i am so sorry, this is the limit of my skill in frontend,
// this is my firstime working with canvas, it's really amazing experience, thank you so much for this lifetime learning :)
// God bless all of u alwayss !!
