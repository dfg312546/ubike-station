import style from "./CheckBox.module.css";
import { useState, useContext, useEffect } from "react";
import { Context } from "@/context/ContextProvider";
import { Checkbox } from "@mui/material";

function CheckBox(props) {
  const Ctx = useContext(Context);
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    setChecked(Ctx.allIsActive);
  }, [Ctx.allIsActive]);

  const handleChange = () => {
    setChecked(!checked);
    if (!checked) {
      Ctx.setSelectedArea((prevSelected) => [...prevSelected, props.name]);
    } else {
      Ctx.setSelectedArea((prevSelected) =>
        prevSelected.filter((area) => area !== props.name)
      );
    }
  };

  return (
    <div className={style.CheckBoxLayoutStyle}>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        sx={{
          color: "#b5cc22",
          "&.Mui-checked": {
            color: "#b5cc22",
          },
        }}
      />
      {props.name}
    </div>
  );
}

export default CheckBox;
