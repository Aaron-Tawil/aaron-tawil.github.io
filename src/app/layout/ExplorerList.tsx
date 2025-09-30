import React from "react";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

interface PageItem {
  index: number;
  name: string;
  route: string;
}

interface Props {
  pages: PageItem[];
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  currentComponent: string;
  setCurrentComponent: React.Dispatch<React.SetStateAction<string>>;
  visiblePageIndexs: number[];
  setVisiblePageIndexs: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function ExplorerList({
  pages,
  selectedIndex,
  setSelectedIndex,
  currentComponent,
  setCurrentComponent,
  visiblePageIndexs,
  setVisiblePageIndexs,
}: Props) {
  const theme = useTheme();
  const navigate = useNavigate();

  function bg(index: number) {
    if (theme.palette.mode === "dark") {
      return selectedIndex === index ? "rgba(144,202,249,0.16)" : "#252527";
    } else {
      return selectedIndex === index ? "#295fbf" : "#f3f3f3";
    }
  }

  function color(index: number) {
    if (theme.palette.mode === "dark") {
      return selectedIndex === index && currentComponent === "tree"
        ? "white"
        : "#bdc3cf";
    } else {
      return selectedIndex === index ? "#e2ffff" : "#69665f";
    }
  }

  return (
    <div role="tree" style={{ minWidth: 220 }}>
      <div
        role="treeitem"
        style={{
          padding: "6px 8px 6px 16px",
          cursor: "pointer",
          color: theme.palette.mode === "dark" ? "#bdc3cf" : "#69665f",
        }}
        onClick={() => {
          navigate("/");
          setSelectedIndex(-1);
        }}
      >
        Home
      </div>
      {pages.map(({ index, name, route }) => (
        <div
          key={index}
          role="treeitem"
          style={{
            padding: "4px 8px 4px 24px",
            backgroundColor: bg(index),
            color: color(index),
            cursor: "pointer",
          }}
          onClick={() => {
            if (!visiblePageIndexs.includes(index)) {
              const newIndexs = [...visiblePageIndexs, index];
              setVisiblePageIndexs(newIndexs);
            }
            navigate(route);
            setSelectedIndex(index);
            setCurrentComponent("tree");
          }}
        >
          {name}
        </div>
      ))}
    </div>
  );
}