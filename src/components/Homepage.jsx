import React, {useState} from 'react';
import styles from "./css/Homepage.module.css"
import Laptop from "./photos/Laptop.png";
import Basketball from "./photos/Basketball.jpg";
import Beer from "./photos/Beer.jpg";
import Flour from "./photos/Flour.jpg";
import Search from "./photos/icons/search.svg";
import Menu from "./photos/icons/hamburger-menu.svg"
import Notify from "./photos/icons/notifications.svg"
import Headphones from "./photos/Headphones.jpg"
import Nike from "./photos/Nike.jpg"
import Orangejuice from "./photos/Orange.jpeg"
import Painting from "./photos/Painting.jpg"
import Drawer from './drawer';
import "./css/sidebar.css"
//import Back from "./photos/icons/less-than-solid.svg"

export default function Homepage (){
    const [isOpen, setIsOpen] = useState(false);


return (
<div className={styles.main}>
    <div className={styles.header}>
    <div className={styles.leftsection}>
    <button className={styles.Menubutton} onClick={() => setIsOpen(!isOpen)}><img className={styles.Menuicon} src={Menu} alt=""/></button>  
    </div>
    <div className={styles.middlesection}> <input className={styles.searchbar} placeholder="Find" type="text"/>
        <button className={styles.searchbutton}><img className={styles.searchicon} src={Search} alt=""/></button>
    </div>
    <div className={styles.rightsection}><button className={styles.notifybutton}><img className={styles.notifyicon} src={Notify} alt=""/></button>  
    </div>
    </div>
    <div className={styles.lowerbody}>
        <div className={styles.drawer}></div>
   <div className={styles.productgrid}>

    <div className={styles.productinfo}>
        <img className={styles.product} src={Beer} alt=""/>
        <div className={styles.textinfo}>
            <p className={styles.productname}>Heineken beer</p>
            <p className={styles.productprice}>500</p>
        </div>
        </div>
   
        <div className={styles.productinfo}>
            <img className={styles.product} src={Headphones} alt=""/>
            <div className={styles.textinfo}>
                <p className={styles.productname}>Headphones</p>
                <p className={styles.productprice}>1,500</p>
            </div>
           
        </div>
        <div className={styles.productinfo}> 
            <img className={styles.product} src={Nike} alt=""/>
            <div className={styles.textinfo}>
                <p className={styles.productname}>Nike shorts</p>
                <p className={styles.productprice}>1,000</p>
            </div>
           
        </div> 
        <div className={styles.productinfo}>
            <img className={styles.product} src={Orangejuice} alt=""/>
            <div className={styles.textinfo}>
                <p className={styles.productname}>Orange juice</p>
                <p className={styles.productprice}>150</p>
            </div>
           
        </div>

   
    <div className={styles.productinfo}>
        <img class={styles.product} src={Basketball} alt=""/>
        <div className={styles.textinfo}>
            <p className={styles.productname}>Basketball shorts</p>
            <p className={styles.productprice}>500</p>
        </div>
        </div>
   
        <div className={styles.productinfo}>
            <img class={styles.product} src={Painting} alt=""/>
            <div className={styles.textinfo}>
                <p className={styles.productname}>Painting</p>
                <p className={styles.productprice}>100,000</p>
            </div>
           
        </div>
        <div className={styles.productinfo}>
            <img class={styles.product} src={Flour} alt=""/>
            <div className={styles.textinfo}>
                <p className={styles.productname}>Unga</p>
                <p className={styles.productprice}>100</p>
            </div>
           
        </div> 
        <div className={styles.productinfo}>
            <img class={styles.product} src={Laptop} alt=""/>
            <div className={styles.textinfo}>
                <p className={styles.productname}>Laptop</p>
                <p className={styles.productprice}>30,000</p>
            </div>
           
        </div>

        <div className={styles.productinfo}>
            <img class={styles.product} src={Laptop} alt=""/>
            <div className={styles.textinfo}>
                <p className={styles.productname}>Laptop</p>
                <p className={styles.productprice}>30,000</p>
            </div>
           
        </div>
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        
        <div class= "sidebar">
      <div class="sidebarOption active">
        <span class="material-icons"> home </span>
        <h2>Home</h2>
      </div>

      <div class="sidebarOption">
        <span class="material-icons"> search </span>
        <h2>Find</h2>
      </div>

      <div class="sidebarOption">
        <span class="material-icons"> notifications_none </span>
        <h2>Notifications</h2>
      </div>

      <div class="sidebarOption">
        <span class="material-icons"> mail_outline </span>
        <h2>Chat</h2>
      </div>

      <div class="sidebarOption">
        <span class="material-icons"> shopping_cart </span>
        <h2>Shop</h2>
      </div>

      <div class="sidebarOption">
        <span class="material-icons"> list_alt </span>
        <h2>Favourites</h2>
      </div>

      <div class="sidebarOption">
        <span class="material-icons"> perm_identity </span>
        <h2>Profile</h2>
      </div>

      <div class="sidebarOption">
        <span class="material-icons"> more_horiz </span>
        <h2>More</h2>
      </div>
    </div>
      </Drawer>
</div>
   </div>
</div>
);
};

