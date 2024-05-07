import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

interface ResearchCardProps{
    image : string;
    title : string;
    id : number;
    link: string;
}

const ResearchCard = ({image, title, id, link} : ResearchCardProps) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 , minHeight: 350}}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default ResearchCard
