import "../css/animation.css";
import { RectInterface } from "../interface/painter.interface";

export const ListTableColors = (data: RectInterface) => {
  const { setRectColor } = data;

  return (
    <>
      <table style={{ width: "250px", marginTop: 10 }}>
        <tbody>
          <tr>
            <th colSpan={3}> </th>
          </tr>
          <tr>
            <td
              style={{
                backgroundColor: "red",
                color: "rgba(0, 0, 0, 0)",
                cursor: "pointer",
              }}
              onClick={(e: any) =>
                setRectColor(e.target.innerHTML.toLowerCase())
              }
            >
              Red
            </td>
            <td
              style={{
                backgroundColor: "blue",
                color: "rgba(0, 0, 0, 0)",
                cursor: "pointer",
              }}
            >
              Blue
            </td>
            <td
              style={{
                backgroundColor: "green",
                color: "rgba(0, 0, 0, 0)",
                cursor: "pointer",
              }}
              onClick={(e: any) =>
                setRectColor(e.target.innerHTML.toLowerCase())
              }
            >
              Green
            </td>
          </tr>
          <tr>
            <td
              style={{
                backgroundColor: "yellow",
                color: "rgba(0, 0, 0, 0)",
                cursor: "pointer",
              }}
              onClick={(e: any) =>
                setRectColor(e.target.innerHTML.toLowerCase())
              }
            >
              Yellow
            </td>
            <td
              style={{
                backgroundColor: "black",
                color: "rgba(0, 0, 0, 0)",
                cursor: "pointer",
              }}
              onClick={(e: any) =>
                setRectColor(e.target.innerHTML.toLowerCase())
              }
            >
              Black
            </td>
            <td
              style={{
                backgroundColor: "gray",
                color: "rgba(0, 0, 0, 0)",
                cursor: "pointer",
              }}
              onClick={(e: any) =>
                setRectColor(e.target.innerHTML.toLowerCase())
              }
            >
              Gray
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
