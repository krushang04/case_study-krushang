import classes from "./ProfileCard.module.css";
import { Box, Grid } from "@material-ui/core";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";
import PhoneEnabledSharpIcon from "@mui/icons-material/PhoneEnabledSharp";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { useState } from "react";
import Delete from "./Delete";
import Edit from "./Edit";

const ProfileCard = (props) => {
  const [liked, setLiked] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const likeHandler = () => {
    setLiked((state) => !state);
  };

  const deleteHandler = () => {
    setIsDeleting((state) => !state);
  };

  const editHandler = () => {
    setIsEditing((state) => !state);
  };

  return (
    <Grid item md={2}>
      {isDeleting && (
        <Delete
          onClick={deleteHandler}
          id={props.data.id}
          name={props.data.name}
        />
      )}
      {isEditing && (
        <Edit onClick={editHandler} id={props.data.id} data={props.data} />
      )}
      <Box className={classes.profileCard}>
        <div className={classes.profilePic}>
          <img
            src={`https://avatars.dicebear.com/v2/avataaars/${props.data.username}.svg?options[mood][]=happy`}
            className={classes.img}
          />
        </div>
        <div className={classes.details}>
          <div className={classes.name}>{props.data.name}</div>
          <div>
            <MailOutlineSharpIcon className={classes.icon} />
            {props.data.email}
          </div>
          <div>
            <PhoneEnabledSharpIcon className={classes.icon} />
            {props.data.phone}
          </div>
          <div>
            <LanguageOutlinedIcon className={classes.icon} />
            {props.data.website}
          </div>
        </div>

        <div className={classes.actions}>
          <div
            className={classes.action}
            style={{ borderRight: "1px solid #dfdfdf" }}
          >
            {liked ? (
              <FavoriteIcon
                className={classes.actionIcon}
                style={{ color: "red" }}
                onClick={likeHandler}
              />
            ) : (
              <FavoriteBorderIcon
                className={classes.actionIcon}
                style={{ color: "red" }}
                onClick={likeHandler}
              />
            )}
          </div>
          <div
            className={classes.action}
            style={{ borderRight: "1px solid #dfdfdf" }}
            onClick={editHandler}
          >
            <BorderColorIcon className={classes.actionIcon} />
          </div>
          <div className={classes.action}>
            <DeleteIcon
              className={classes.actionIcon}
              onClick={deleteHandler}
            />
          </div>
        </div>
      </Box>
    </Grid>
  );
};

export default ProfileCard;
