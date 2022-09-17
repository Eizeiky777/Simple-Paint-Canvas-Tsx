import { fabric } from "fabric";
import { ListTableColors } from "../component/list-colors";
import { useEffect, useState } from "react";

import "../css/animation.css";
import { ListButtons } from "../component/shape-button";

const sampleImgUrl1 =
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80";

export const Painters = () => {
  const [canvas, setCanvas] = useState(new fabric.Canvas(null));
  const [imgURL, setImgURL] = useState("");
  const [draw, setDrawing] = useState(true);

  const [fabricObj, setFabricObj] = useState(new fabric.Object({}));
  const [fabricObjColor, setFabricObjColor] = useState("");
  const [fabricText, setFabricText] = useState(new fabric.Text(""));

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

    setFabricObj(shape);
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

    setFabricObj(shape);
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

    setFabricObj(shape);
  };

  const addLine = (canvi: fabric.Canvas): void => {
    const shape = new fabric.Line([50, 100, 200, 200], {
      left: 170,
      top: 150,
      stroke: "red",
    });

    canvi.add(shape);
    canvi.renderAll();

    setFabricObj(shape);
  };

  const deleteFabricObj = (
    canvi: fabric.Canvas,
    shape: fabric.Object
  ): void => {
    canvi.remove(shape);
    canvi.renderAll();
  };

  const addImg = (e: any, imageUrl: any, canvi: fabric.Canvas): void => {
    e.preventDefault();
    fabric.Image.fromURL(imageUrl, (img: fabric.Image) => {
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

  const changeColorFabricObj = (
    canvi: fabric.Canvas,
    shape: fabric.Object,
    newColor: string
  ) => {
    shape.set("fill", newColor);
    canvi.add(shape);
    canvi.renderAll();
  };

  const insertText = (
    e: React.ChangeEvent<any>,
    fabricText: fabric.Text,
    canvi: fabric.Canvas
  ) => {
    fabricText.text = e.target.value;
    fabricText.setOptions({ left: 100, top: 100 });
    canvi.add(fabricText);
    canvi.renderAll();
    setFabricText(fabricText);
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
            <ListButtons
              addRectangle={addRectangle}
              addTriangle={addTriangle}
              addCircle={addCircle}
              addLine={addLine}
              canvas={canvas}
            />

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
          </div>
          <form onSubmit={(e) => addImg(e, imgURL, canvas)}>
            <div>
              <input
                type="file"
                placeholder="please input your url image :)"
                onChange={(e: any) => {
                  const fileImg = e.target.files[0];
                  var reader = new FileReader();
                  reader.onload = function () {
                    const url: any = reader.result;
                    setImgURL(url);
                  };
                  reader.readAsDataURL(fileImg);
                }}
                style={{
                  width: 250,
                  height: 23,
                  marginTop: 20,
                  marginBottom: 10,
                }}
              />
              <button
                style={{
                  width: 100,
                  height: 25,
                  fontFamily: "Roboto, sans-serif",
                }}
                type="submit"
              >
                Add Image
              </button>
            </div>
          </form>
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
            onClick={() =>
              changeColorFabricObj(canvas, fabricObj, fabricObjColor)
            }
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
          <ListTableColors setFabricObjColor={setFabricObjColor} />

          <p
            style={{
              width: 200,
              height: 15,
              fontFamily: "Roboto, sans-serif",
              fontWeight: "normal",
              fontSize: 15,
              marginLeft: "5px",
              padding: 0
            }}
          >
            Write Your Custom Text!
          </p>
          <input
            style={{
              width: 200,
              height: 15,
              fontFamily: "Roboto, sans-serif",
              fontWeight: "normal",
              marginLeft: "5px",
            }}
            onChange={(e) => insertText(e, fabricText, canvas)}
          />
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
