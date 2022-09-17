export interface ShapeButtonInterface {
  addRectangle: (canvi: fabric.Canvas) => void;
  addCircle: (canvi: fabric.Canvas) => void;
  addTriangle: (canvi: fabric.Canvas) => void;
  addLine: (canvi: fabric.Canvas) => void;
  canvas: fabric.Canvas;
}
