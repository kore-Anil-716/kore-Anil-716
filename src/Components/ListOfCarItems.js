import React,{useEffect,useState} from 'react';
import Pagination from './Pagination';
import './item.css';
const car___list=[
  {
    url:'https://media.zigcdn.com/media/model/2023/May/db-12_600x400.jpg',
    name:'Aston Martin DB12',
    price:'$449'
  },
  {
    url:'https://static.wixstatic.com/media/347dd2_888edcd8921842aabab3865d73cf0721~mv2.jpg/v1/fill/w_680,h_450,al_c,q_80,enc_auto/347dd2_888edcd8921842aabab3865d73cf0721~mv2.jpg',
    name:'BMW iX1',
    price:'$650'
  },
  {
    url:'https://media.caradvice.com.au/image/private/w_2000,ar_16:9,c_lfill,f_auto,g_auto:car,q_auto/t_wm_nw/dbaccelwgj72n9hy0n0y.jpg',
    name:'BMW i4',
    price:'$725'
  },
  {
    url:'https://st1.latestly.com/wp-content/uploads/2021/03/25-3.jpg',
    name:'Kia EV6',
    price:'$605'
  
  },
  {
    url:'https://th.bing.com/th/id/OIP.s9YNfwogsqp7HuhEb4-YIQHaE7?pid=ImgDet&rs=1',
    name:'Mercedes-Benz EQE',
    price:'$239'
  
  },
  {
    url:'https://img-ik.cars.co.za/images/2017/11/Toyota-Hilux-FL/tr:n-news_1200x/Toyota-hilux-Revo-facelift-double-cab-front-three-quarters.jpg',
    name:'Toyota Hilux',
    price:'$315'
  },
  {
    url:'https://wallpapercave.com/wp/wp2559676.gif',
    name:'Aston Martin DB12',
    price:'$449'
  },
  {
    url:'https://wallpapertag.com/wallpaper/full/3/9/3/855490-desktop-backgrounds-cars-2560x1440-mac.jpg',
    name:'BMW iX1',
    price:'$650'
  },
  {
    url:'https://www.gannett-cdn.com/-mm-/11c96da08ce3a49fdfbb691904e79f021dfcfe4e/c=0-86-4552-2657/local/-/media/2016/04/07/USATODAY/USATODAY/635956232781740839-AFP-550307874.jpg?width=3200&height=1808&fit=crop&format=pjpg&auto=webp',
    name:'BMW i4',
    price:'$725'
  },
  {
    url:'https://th.bing.com/th/id/R.b02a37f59f6ddc69f9b86c1e9d677afa?rik=HEZjvdBkn%2fRLSQ&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2014%2f08%2f12%2fexotic-car-wallpaper.jpg&ehk=WuehlgBj43VKCDW5vegbNZgG7TkjiPOSIBDbq7ZPyiY%3d&risl=&pid=ImgRaw&r=0',
    name:'Kia EV6',
    price:'$605'
  
  },
  {
    url:'https://magazine.northeast.aaa.com/wp-content/uploads/2020/03/Most-popular-cars-29.jpg',
    name:'Mercedes-Benz EQE',
    price:'$239'
  
  },
  {
    url:'https://mediacloud.carbuyer.co.uk/image/private/s--7V0JSPpV--/v1597797178/drivingelectric/2020-04/lexus-lc8.jpg',
    name:'Toyota Hilux',
    price:'$315'
  },
  {
    url:'https://th.bing.com/th/id/R.5b183cae7868d6df032e8e2aa81631ef?rik=z33%2f7e3h6bYyTA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-wG5Y5Q1MGz8%2fTxvb0lbjbmI%2fAAAAAAAAB2c%2fimu2PScSIi4%2fs1600%2fdodge-viper-sports-cars.43101027.jpg&ehk=GXVGnldok4kxazJrBKQTm8dp3sgOW8FDYmXCZsqllRA%3d&risl=&pid=ImgRaw&r=0',
    name:'Aston Martin DB12',
    price:'$449'
  },
  {
    url:'https://th.bing.com/th/id/R.2417b638262bc0a8a75c64449c017d4f?rik=nWCcyWCMoNp%2fjQ&riu=http%3a%2f%2fwww.9to5carwallpapers.com%2fwp-content%2fuploads%2f2014%2f04%2fExotic-Cars-Latest-Wallpapers.jpg&ehk=0V3hozNA2ukqQDfomJGE9q0uFHbM3z1wDnWcwaKpmZk%3d&risl=&pid=ImgRaw&r=0',
    name:'BMW iX1',
    price:'$650'
  },
  {
    url:'https://th.bing.com/th/id/R.39e764e25ba0f331533c3af8b7d0fec3?rik=0k38pbVWD8ZZaQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-ekDwZA8Kto0%2fTv2VMtIF97I%2fAAAAAAAAABw%2fFRy9vpngFLc%2fs1600%2fhd_car_wallpapers%2b3.jpg&ehk=s1YZNkRdRn4SbtYWTS8ZFPwD6gIqdeLQKJLZgS3CIbo%3d&risl=&pid=ImgRaw&r=0',
    name:'BMW i4',
    price:'$725'
  },
  {
    url:'https://cdn.motor1.com/images/mgl/rPXnr/s3/best-cars-lead.jpg',
    name:'Kia EV6',
    price:'$605'
  
  },
  {
    url:'https://th.bing.com/th/id/R.f2c324c1be9c0d36aa93e2c0f6e9030d?rik=hm3eNgAMXLuL6Q&riu=http%3a%2f%2f4.bp.blogspot.com%2f-OIbgn_Ga4R0%2fVARzAvX7PaI%2fAAAAAAAAA-Y%2fxQbZt1CE8B8%2fs1600%2fbuick.jpg&ehk=ManT%2fFI3Nf7UAEjHO2MbiYa123qh76BKuY9lj1gazTo%3d&risl=&pid=ImgRaw&r=0',
    name:'Mercedes-Benz EQE',
    price:'$239'
  
  },
  {
    url:'https://www.classicdriver.com/sites/default/files/styles/full_width_slider/public/article_images/iso-grifo.jpg?itok=rvHuD0RU',
    name:'Toyota Hilux',
    price:'$315'
  },
  {
    url:'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/dp/images/uploads/Ferrari_458Italia_w.jpg',
    name:'Aston Martin DB12',
    price:'$449'
  },
  {
    url:'https://th.bing.com/th/id/R.5cec72b3458e5fe797425d3b11251af9?rik=GCXqZJvmHJLWJA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-tLTsTA1hTNc%2fT_Halyxh-iI%2fAAAAAAAAAdQ%2fcxAcaW68B2o%2fs1600%2fBest_Ferrari_California_HD_26.jpg&ehk=Fp3mrJ3I1Pc35rHrnNeLE3BxloOfqaJ2l%2bfUcyDs9TY%3d&risl=&pid=ImgRaw&r=0',
    name:'BMW iX1',
    price:'$650'
  },
  {
    url:'https://media.caradvice.com.au/image/private/w_2000,ar_16:9,c_lfill,f_auto,g_auto:car,q_auto/t_wm_nw/dbaccelwgj72n9hy0n0y.jpg',
    name:'BMW i4',
    price:'$725'
  },
  {
    url:'https://www.pixelstalk.net/wp-content/uploads/2016/06/Pictures-Download-HD-Car-Wallpapers.jpg',
    name:'Kia EV6',
    price:'$605'
  
  },
  {
    url:'https://i.ytimg.com/vi/APPZ-vRSxNA/maxresdefault.jpg',
    name:'Mercedes-Benz EQE',
    price:'$239'
  
  },
  {
    url:'https://th.bing.com/th/id/R.f5e4be234aec8c9572579e374606e44c?rik=UyhFSt2O1hKmjQ&riu=http%3a%2f%2fstatic3.businessinsider.com%2fimage%2f5797901088e4a71b008babc3-1200%2fbest-car-between-25000-to-30000-mazda3.jpg&ehk=PKr3PNBgniEQ7ExijQHOte18lhz9O9PXUFC2ZunBxU8%3d&risl=&pid=ImgRaw&r=0',
    name:'Toyota Hilux',
    price:'$315'
  },
  {
    url:'https://marketbusinessnews.com/wp-content/uploads/2020/10/classic-car-9821.jpg',
    name:'Aston Martin DB12',
    price:'$449'
  },
  {
    url:'https://static.wixstatic.com/media/347dd2_888edcd8921842aabab3865d73cf0721~mv2.jpg/v1/fill/w_680,h_450,al_c,q_80,enc_auto/347dd2_888edcd8921842aabab3865d73cf0721~mv2.jpg',
    name:'BMW iX1',
    price:'$650'
  },
  {
    url:'https://media.caradvice.com.au/image/private/w_2000,ar_16:9,c_lfill,f_auto,g_auto:car,q_auto/t_wm_nw/dbaccelwgj72n9hy0n0y.jpg',
    name:'BMW i4',
    price:'$725'
  },
  {
    url:'https://th.bing.com/th/id/R.72965b6449feddd4248814f6f7b0414a?rik=VSaVU2PiNo0khA&riu=http%3a%2f%2ffc06.deviantart.net%2ffs39%2ff%2f2008%2f325%2f8%2f0%2fThe_Best_Cars_Ever_by_Iam_Top1989.jpg&ehk=%2fOd1lKFcwkJCNzDGgXcbUDp8zv2LxTGSfD%2fbc36YaRw%3d&risl=&pid=ImgRaw&r=0',
    name:'Kia EV6',
    price:'$605'
  
  },
  {
    url:'https://th.bing.com/th/id/R.3623dc1dc1b1789329e819984d1ae959?rik=EBxl3jhmc5vlTw&riu=http%3a%2f%2fwww.everysingletopic.com%2fwp-content%2fuploads%2f2013%2f05%2f2013_holden.jpg&ehk=GLnvqTun4oSuEv5hImbUL5kwuIxGQTt7NsutMFLfQ2Y%3d&risl=&pid=ImgRaw&r=0',
    name:'Mercedes-Benz EQE',
    price:'$239'
  
  },
  {
    url:'https://2.bp.blogspot.com/-oeKD-kbBke4/ToDNjVNFM0I/AAAAAAAAAFc/46JA6M74c2c/s1600/best-car-wallpapers-4.jpg',
    name:'Toyota Hilux',
    price:'$315'
  },
  {
    url:'https://media.zigcdn.com/media/model/2023/May/db-12_600x400.jpg',
    name:'Aston Martin DB12',
    price:'$449'
  },
  {
    url:'https://static.wixstatic.com/media/347dd2_888edcd8921842aabab3865d73cf0721~mv2.jpg/v1/fill/w_680,h_450,al_c,q_80,enc_auto/347dd2_888edcd8921842aabab3865d73cf0721~mv2.jpg',
    name:'BMW iX1',
    price:'$650'
  },
  {
    url:'https://media.caradvice.com.au/image/private/w_2000,ar_16:9,c_lfill,f_auto,g_auto:car,q_auto/t_wm_nw/dbaccelwgj72n9hy0n0y.jpg',
    name:'BMW i4',
    price:'$725'
  },
  {
    url:'https://st1.latestly.com/wp-content/uploads/2021/03/25-3.jpg',
    name:'Kia EV6',
    price:'$605'
  
  },
  {
    url:'https://th.bing.com/th/id/OIP.s9YNfwogsqp7HuhEb4-YIQHaE7?pid=ImgDet&rs=1',
    name:'Mercedes-Benz EQE',
    price:'$239'
  
  },
  {
    url:'https://img-ik.cars.co.za/images/2017/11/Toyota-Hilux-FL/tr:n-news_1200x/Toyota-hilux-Revo-facelift-double-cab-front-three-quarters.jpg',
    name:'Toyota Hilux',
    price:'$315'
  },
  {
    url:'https://media.zigcdn.com/media/model/2023/May/db-12_600x400.jpg',
    name:'Aston Martin DB12',
    price:'$449'
  },
  {
    url:'https://lh3.googleusercontent.com/proxy/YvTY0e01FEZ-yzHwiHAj9Ip6xQdKzBqpxHmWtvvpQT1fL9X5LO6I4FgC_mjjRPuq1wbcymbGyDCLcWz5Z6v3LoirtjbKDdyg2LTfAKiIZDdP8ZRWhtrjALN9=s0-d',
    name:'BMW iX1',
    price:'$650'
  },
  {
    url:'https://th.bing.com/th/id/R.26c1f38423423d41ed74004479cb2095?rik=KzvrST5OymTGsQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-cyUpufR6eYo%2fTwCrSmzNFSI%2fAAAAAAAAALI%2fCU1NLcZqUl8%2fs1600%2fSport%2bcars%2bwallpapers%2bfree%2bdownload.jpg&ehk=t3tOnTws1BrWWXXwKjEkb7upz1mK9LZhLoLLVwziXEQ%3d&risl=&pid=ImgRaw&r=0',
    name:'BMW i4',
    price:'$725'
  },
  {
    url:'https://th.bing.com/th/id/R.e0596a906232c459f5b6757211d2e325?rik=NnlCVisr1COjyQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-Y7hDWJzTVug%2fTw0yQTjroLI%2fAAAAAAAAADw%2foczjCkCIClM%2fs1600%2fbest_car_wallpapers%2b1.jpeg&ehk=bvBYqazmtDJH90m5Uh8Qr8r0rn3WoPyna4GPmJaikQw%3d&risl=&pid=ImgRaw&r=0',
    name:'Kia EV6',
    price:'$605'
  
  },
  {
    url:'https://i.ytimg.com/vi/hkb1j3_02P4/maxresdefault.jpg',
    name:'Mercedes-Benz EQE',
    price:'$239'
  
  },
  {
    url:'https://www.pixelstalk.net/wp-content/uploads/2016/06/Cool-car-wallpapers-photos-download.jpg',
    name:'Toyota Hilux',
    price:'$315'
  },
  {
    url:'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/08/31/105427259-1535730447635gettyimages-810877128.1910x1000.jpeg',
    name:'Aston Martin DB12',
    price:'$449'
  },
  {
    url:'https://th.bing.com/th/id/R.ea49523df30f16d2ad6c78db93b74c90?rik=IE%2bZVnm2VjOLgA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-j8WTttPgV3o%2fTxEj7paWaMI%2fAAAAAAAAARs%2fGgH-HkIIRZM%2fs1600%2fbest_car_wallpaper%2b7.jpg&ehk=p10xlBWWZmC7hjnFe%2bzK4fxQcEoHejn8HIRENTuKWO4%3d&risl=&pid=ImgRaw&r=0',
    name:'BMW iX1',
    price:'$650'
  },
  {
    url:'https://th.bing.com/th/id/R.ea9fd9d5f32ea130f49eb291e5ec7484?rik=iPtgBqBaQKDEnQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-yJVMz7ScVSQ%2fTpXuR372w1I%2fAAAAAAAAAhc%2fa_EuMgA8c78%2fs1600%2fbest-car-in-the-world-2.jpg&ehk=UT0dbgI4bSR8%2b7UrfadpfbKHWAEGjZcmBVs%2bzlX641g%3d&risl=&pid=ImgRaw&r=0',
    name:'BMW i4',
    price:'$725'
  },
  {
    url:'https://wallpapercave.com/wp/wp2792225.jpg',
    name:'Kia EV6',
    price:'$605'
  
  },
  {
    url:'https://images.designtrends.com/wp-content/uploads/2015/11/06085041/Blue-Bugatti-Wallpaper.jpg',
    name:'Mercedes-Benz EQE',
    price:'$239'
  
  },
  {
    url:'https://wallpaperaccess.com/full/126161.jpg',
    name:'Toyota Hilux',
    price:'$315'
  },
  {
    url:'https://2.bp.blogspot.com/-1dVrQ71fh9w/UtPk1GYyZNI/AAAAAAAACcU/pwTLjRdCKK0/s1600/most+exotic+cars+in+2014.jpg',
    name:'Aston Martin DB12',
    price:'$449'
  },
  {
    url:'https://2.bp.blogspot.com/-rd-_HNRC5Pk/VMEhe3lGWnI/AAAAAAAABD4/VoNprDyzc8Y/s1600/LEXUS+RC+F+The+Best+New+Car+2015+Edition.jpg',
    name:'BMW iX1',
    price:'$650'
  },
  {
    url:'https://th.bing.com/th/id/R.109d117977cbecfbc4830f5e08117ba3?rik=kHq5AROUqrPDBA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-OLVygy95E7I%2fToDNgFcBj_I%2fAAAAAAAAAFU%2fLmUNOnGvDeE%2fs1600%2fbest-car-wallpapers-2.jpg&ehk=vzlbEy%2fumc3o50wPWFEjSvtaGo8cVOFJL5mb2zm1VEs%3d&risl=&pid=ImgRaw&r=0',
    name:'BMW i4',
    price:'$725'
  },
  {
    url:'https://mediacloud.carbuyer.co.uk/image/private/s--YF2hqKfO--/v1579627829/carbuyer/1-mclaren-650s-1.jpg',
    name:'Kia EV6',
    price:'$605'
  
  },
  {
    url:'https://i1.wp.com/www.stugon.com/wp-content/uploads/2013/12/Exotic-Car-Wallpapers-HD-Edition-stugon.com-10.jpg',
    name:'Mercedes-Benz EQE',
    price:'$239'
  
  },
  {
    url:'https://th.bing.com/th/id/R.39cb4b68f80b886dfcc3064ec7cb3759?rik=JkBYXj4Ss1x6eg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fLamborghini-mountain-fog-sports-car-photos.jpg&ehk=e1fQIG4IglOhaHkUmXVCvTdx4g7a1bC3Z6nVRUpCS1U%3d&risl=&pid=ImgRaw&r=0',
    name:'Toyota Hilux',
    price:'$315'
  },
  {
    url:'https://www.motoringresearch.com/wp-content/uploads/2018/05/14_popular_movie_cars.jpg',
    name:'Aston Martin DB12',
    price:'$449'
  },
  {
    url:'https://inews-prd-a-images.s3.eu-west-2.amazonaws.com/content/uploads/2016/10/10-popular-cars-1.jpg',
    name:'BMW iX1',
    price:'$650'
  },
  {
    url:'https://th.bing.com/th/id/OIP.xorQt1VV1iMSuqiY1jPvngHaF6?pid=ImgDet&w=2048&h=1637&rs=1',
    name:'BMW i4',
    price:'$725'
  },
  {
    url:'https://www.conceptcarcredit.co.uk/wp-content/uploads/2018/04/Most-popular-Car-in-the-UK-1-e1523884352923-1022x577.jpg',
    name:'Kia EV6',
    price:'$605'
  
  },
  {
    url:'https://www.gannett-cdn.com/-mm-/9e81895dd8d534c9371c8d639e4ecf6a70ddd330/c=353-455-3645-2312/local/-/media/USATODAY/test/2013/10/22/1382469285000-AP-Auto-Show-007.jpg?width=3200&height=1680&fit=crop',
    name:'Mercedes-Benz EQE',
    price:'$239'
  
  },
  {
    url:'https://purbat.com/wp-content/uploads/sd_best_cars_5.jpg',
    name:'Toyota Hilux',
    price:'$315'
  },
  {
    url:'https://www.rd.com/wp-content/uploads/2019/06/shutterstock_273759857.jpg',
    name:'Aston Martin DB12',
    price:'$449'
  },
  {
    url:'https://pictures.topspeed.com/IMG/jpg/200607/top-12-best-american.jpg',
    name:'BMW iX1',
    price:'$650'
  },
  {
    url:'https://www.motoringresearch.com/wp-content/uploads/2017/05/mustang.jpg',
    name:'BMW i4',
    price:'$725'
  },
  {
    url:'https://2.bp.blogspot.com/-9DXPps57kSw/T_WUjFpp6YI/AAAAAAAAAPk/KPoNvwEXX0I/s1600/best+cars+in+the+world+top+10-4.jpg',
    name:'Kia EV6',
    price:'$605'
  
  },
  {
    url:'https://www.watchmojo.com/uploads/thumbs720/PH-H-Top10-Most-Popular-Cars-Of-All-Time_F8S6S7-720p30.jpg',
    name:'Mercedes-Benz EQE',
    price:'$239'
  
  },
  {
    url:'https://www.nearbyme2.com/wp-content/uploads/2020/08/Top-10-Most-Popular-Cars-in-the-World.jpg',
    name:'Toyota Hilux',
    price:'$315'
  }
  ]
function ListOfCarItems(){
  const [data,setData]=useState([]);
  const [perpage,setPerpage]=useState([]);
  useEffect(()=>{
    setPerpage(car___list.slice(0,6))
    setData(...data,car___list);
  },[])
  
const pageHandler=(pageNumber)=>{
  console.log(pageNumber)
  console.log(setPerpage(perpage.slice((pageNumber*6)-6),pageNumber*6))
  setPerpage(data.slice((pageNumber*6)-6,pageNumber*6));

}



    return <React.Fragment>
       <ul className='ulist'>
        {
            perpage.map((eachobj,index)=>{
                const {url,name,price}=eachobj;
                return (<li key={index}  className='item'>
                    <img src={url} alt='error' />
                    <div className='first_span'>
                      <p className='vehicle_name'>{name}</p>
                      <p className='year'>2021</p>
                    </div>
                    <span className='second_span'>
                        <p className='details'><i className="fa-solid fa-user-group"></i>4 people</p>
                        <p className='details'><i className="fa-solid fa-gas-pump"></i>Hybrid</p>
                        <p className='details'><i className="fa-solid fa-gauge"></i>6.1km/1-litre</p>
                        <p className='details'><i className="fa-solid fa-gauge-simple-high"></i>Automatic</p>
                    </span>
                    <hr className='hr' />
                    <span className='third_span'>
                        <p className='price'>{price}<span className='small'>/month</span></p>
                        <i className="fa-regular fa-heart"></i>
                        <button>Rent now</button>
                    </span>
                </li>)
            })
        }
       </ul>
       <Pagination data={data} perpage={perpage} pageHandler={pageHandler}/>
    </React.Fragment>
}
export default ListOfCarItems