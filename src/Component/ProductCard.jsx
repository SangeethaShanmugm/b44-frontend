import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import {useNavigate} from "react-router-dom"
function ProductCard({ value, handleDelete }) {
  const navigate = useNavigate()
  return (
    <>
      <Card className="card-style">
        <CardActionArea>
          <CardMedia
            sx={{ width: "200px" }}
            component="img"
            height="140"
            image={value.productImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {value.name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Rs. {value.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {value.description}
            </Typography>
            <IconButton
              onClick={() => handleDelete(value.id)}
              aria-label="delete"
              color="error"
            >
              <DeleteIcon />
            </IconButton>

            <IconButton
              onClick={() => navigate(`/products/editProduct/${value.id}`)}
              aria-label="edit"
              color="secondary"
            >
              <EditIcon />
            </IconButton>            
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default ProductCard;
