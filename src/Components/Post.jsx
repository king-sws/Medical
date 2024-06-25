import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const MediaCard = () => {
  return (
    <Card className='group cursor-pointer md:mx-auto mb-10 lg:mb-0 ' sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="/img/blog/img-1.png"
        className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <p className='text-sm text-slate-500 mb-2 ' >Jan 6,2024</p>
          <p className='text-base font-bold' >10 Foods To Avoid For Your Heart Health</p>
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <p>Lorem ipsum dolor sit amet, consectetur adicing elit. Eveniet, tenetur quod. Consequuntur cum maiores molestias error illum laboriosam reiciendis dolorum? <span className='text-blue-800 underline hover:text-blue-500' >Read more</span> </p>
        </Typography>
      </CardContent>
      
    </Card>
  );
}
const MediaCard1 = () => {
  return (
    <Card className='group cursor-pointer md:mx-auto  mb-10 lg:mb-0' sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="/img/blog/img-2.png"
        className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <p className='text-sm text-slate-500 mb-2 ' >Jan 6,2024</p>
          <p className='text-base font-bold' >10 Foods To Avoid For Your Heart Health</p>
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <p>Lorem ipsum dolor sit amet, consectetur adicing elit. Eveniet, tenetur quod. Consequuntur cum maiores molestias error illum laboriosam reiciendis dolorum? <span className='text-blue-800 underline hover:text-blue-500' >Read more</span> </p>
        </Typography>
      </CardContent>
      
    </Card>
  );
}
const MediaCard2 = () => {
  return (
    <Card className='group cursor-pointer md:mx-auto  mb-10 lg:mb-0' sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="/img/blog/img-3.png"
        className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <p className='text-sm text-slate-500 mb-2 ' >Jan 6,2024</p>
          <p className='text-base font-bold' >10 Foods To Avoid For Your Heart Health</p>
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <p>Lorem ipsum dolor sit amet, consectetur adicing elit. Eveniet, tenetur quod. Consequuntur cum maiores molestias error illum laboriosam reiciendis dolorum? <span className='text-blue-800 underline hover:text-blue-500' >Read more</span> </p>
        </Typography>
      </CardContent>
      
    </Card>
  );
}
const Post = () => {
  return (
    <section id='Blog' >
        <div className="containe">
            <div className="">
                <h2 className="text-3xl font-medium" >Our Recents Posts</h2>
                <div className="mt-10 grid grid-cols-1  lg:grid-cols-3 items-center ">
                    <MediaCard />
                    <MediaCard1 />
                    <MediaCard2 />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Post