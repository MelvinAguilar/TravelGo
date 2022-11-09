import classes from "./CategoryContainer.module.scss";
import Button from "./../../../Button/Button";

import { Camera } from "react-bootstrap-icons";

const CategoryContainer = () => {
  return (
    <section className={classes["CategoryContainer"]}>
      <div className={classes["CategoryContainer__title"]}>
        <h2>Explora según tus actividades favoritas</h2>
        <p>
          Vulputate molestie molestie amet leo blandit accumsan. Sapien sed amet
          tellus purus sit odio eget. Diam morbi faucibus vitae neque id in.
          Nullam sed et dapibus nunc, porta enim orci urna, sit. Lectus ac.
        </p>
      </div>
      <div className={classes["CategoryContainer__categories"]}>
        <Button modifierClass={"Button--white"}>
          <Camera />
          stargazing
        </Button>
        <Button modifierClass={"Button--white"}>
          <i className="fas fa-search"></i>
          stargazing
        </Button>
        <Button modifierClass={"Button--white"}>
          <i className="fas fa-search"></i>
          stargazing
        </Button>
        <Button modifierClass={"Button--white"}>
          <i className="fas fa-search"></i>
          stargazing
        </Button>
        <Button modifierClass={"Button--white"}>
          <i className="fas fa-search"></i>
          stargazing
        </Button>
        <Button modifierClass={"Button--white"}>
          <i className="fas fa-search"></i>
          stargazing
        </Button>
        <Button modifierClass={"Button--white"}>
          <i className="fas fa-search"></i>
          stargazing
        </Button>
        <Button modifierClass={"Button--white"}>
          <i className="fas fa-search"></i>
          stargazing
        </Button>
        <Button modifierClass={"Button--white"}>
          <i className="fas fa-search"></i>
          stargazing
        </Button>
        <Button modifierClass={"Button--white"}>
          <i className="fas fa-search"></i>
          stargazing
        </Button>
      </div>
    </section>
  );
};

export default CategoryContainer;
