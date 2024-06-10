import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment, id, instructions } =
    exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap='50px'
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}>
      <img src={gifUrl} alt={name} className='detail-image' loadind='lazy' />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          variant='h3'
          textTransform='capitalize'
          color='#ff2625'
          mb='50px'>
          {name}
        </Typography>
        <Typography variant='subtitle1'>
          <ul>
            {instructions?.map((inst, index) => (
              <li key={index}>{inst}</li>
            ))}
          </ul>
        </Typography>
        {extraDetail.map((item, index) => (
          <Stack key={index} direction='row' gap='24px' alignItems='center'>
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}>
              <img src={item.icon} />
            </Button>
            <Typography variant='h5' textTransform='capitalize'>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
