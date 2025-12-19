import logo from './logo.png';
import video_banner from './home-page-banner.mp4'
import people_org from './people-org.png'
import people from './people.png'
import instagram from './instagram.png'
import linkedin from './linkedin.png'
import facebook from './facebook.png'
import twitter from './twitter.png'

export const assets={
    logo,
    video_banner,
    people_org,
    people
}

export const steps=[{
    step:"Step 1",
    title:"Select an image",
    description:(
        `  First, Choose the image you want to remove background from by clicking  on "Start from a photo"
          Your Image format can be PNG or JPG.
          we support all image dimensions.`
        
        
    ),
},
{
    step:"Step 2",
    title:"Let magic remove the background",
    description:(
      `Our tool automatically removes the background from your image .Next ,you can choose a background colour .Our most popular options are white and transparent backgrounds ,but you can pick any colour you like`
    ),
},
{
    step:"Step 3",
    title:"Download Your Image",
    description:`After selecting a new background color, download your photo and you're done! 
    You can also save your picture in the Photoroom App by creating an  account`

}
];

export const catagories=["People","Products","Animals","Cars","Graphics"];

export const Plans=[{
    id:"Basic",
    name:"Basic Package",
    price:499,
    credits:"1000 credits",
    description:"Best for personal use",
    popular:false
},
{
    id:"premium",
    name:"Premium Package",
    price:899,
    credits:"250 credits",
    description:"Best for business use",
    popular:true
},{
    id:"Ultimate",
    name:"Ultimate Package",
    price:1499,
    credits:"1000 credits",
    description:"Best for enterprice use",
    popular:false
}
]

export const tesimonials=[{
    id:1,
    quote:"We are impressed by the AI  and think it's the best choice on the market.",
    author:"Anthony Walker",
    handle:"@_webarchitect"
},{
    id:2,
    quote:"remove.bg is leaps and  bounds ahead of the competition .A thousand times better . It simplified the whole process",
    author:"Sarah Johnson",
    handle:"@techlead_sarah"
},{
    id:3,
    quote:"We were impressed  by its ability  to account for pesky , feathery hair without making an image look jagged  and ",
    author:"Micheal Chen",
    handle:"@coding_newbie"
}]

export const footerConstants=[{
    url:"https://facebook.com",
    logo:facebook
},{
    url:"https://linkedin.com",
    logo:linkedin
},{
    url:"https://instagram.com",
    logo:instagram
    
},{
    url:"https://twitter.com",
    logo:twitter
}]