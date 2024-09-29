import { Component,OnInit,NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Add this line
import { Products } from './Model/Product'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'AscendHackPack_ProductSearch';
  data: any;
  myPromt : string='';
  products: Products[] = [];
  isDisabled: boolean = false;

  constructor(private appService: AppService) { }

  

  
  ngOnInit(): void {
    // // this.appService.getData().subscribe(response => {
    // //   this.data = response;
    //   console.log(this.data);
    // });
  }
  SearchProduct() { 
    console.log(this.myPromt);
    // this.appService.getData(this.myPromt).subscribe(response => {
    //   this.data = response;
    //   console.log(this.data);
    // });

   this.products = [    
      {
        "description": "Amazon Basics 12-Cup Coffee Maker with Reusable Filter, Coffee Pot, Coffee Machine, Black and Stainless Steel",
        "image": "https://m.media-amazon.com/images/I/717WxwMxNML._AC_UL320_.jpg",
        "link": "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTozNjM2NzY1NzkyNDI2ODk1OjE3Mjc1NTA0MjU6c3BfYXRmOjIwMDA0OTc4NjgzNzQ0MTo6MDo6&url=%2FAmazonBasics-12-Cup-Coffee-Reusable-Stainless%2Fdp%2FB084ZH769P%2Fref%3Dsr_1_1_ffob_sspa%3Fdib%3DeyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8%26dib_tag%3Dse%26keywords%3Dcoffee%2Bpot%26qid%3D1727550425%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
        "price": "$23.69",
        "rating": "4 out of 5 stars.",
        "source": "Amazon"
      },
      {
        "description": "Cuisinart Coffee Maker, 14-Cup Glass Carafe, Fully Automatic for Brew Strength Control & 1-4 Cup Setting, Stainless Steel, DCC-3200P1",
        "image": "https://m.media-amazon.com/images/I/71io+Gh4ApL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTozNjM2NzY1NzkyNDI2ODk1OjE3Mjc1NTA0MjU6c3BfYXRmOjMwMDA4OTI3NjY1MTYwMjo6MDo6&url=%2FCuisinart-DCC-3200-PerfecTemp-Programmable-Coffeemaker%2Fdp%2FB00MVWGQX0%2Fref%3Dsr_1_2_sspa%3Fdib%3DeyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8%26dib_tag%3Dse%26keywords%3Dcoffee%2Bpot%26qid%3D1727550425%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
        "price": "$79.95",
        "rating": "4.5 out of 5 stars.",
        "source": "Amazon"
      },
      {
        "description": "BLACK+DECKER 12-Cup Digital Coffee Maker, Programmable, Washable Basket Filter, Sneak-A-Cup, Auto Brew, Water Window, Keep Hot Plate, Black",
        "image": "https://m.media-amazon.com/images/I/61oCzQ33FXL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTozNjM2NzY1NzkyNDI2ODk1OjE3Mjc1NTA0MjU6c3BfYXRmOjMwMDA1MDAzMjI3OTkwMjo6MDo6&url=%2FBLACK-DECKER-Programmable-Coffeemaker-CM1160B%2Fdp%2FB01GJOMWVA%2Fref%3Dsr_1_3_sspa%3Fdib%3DeyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8%26dib_tag%3Dse%26keywords%3Dcoffee%2Bpot%26qid%3D1727550425%26sr%3D8-3-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
        "price": "$99.95",
        "rating": "3.8 out of 5 stars.",
        "source": "Amazon"
      },
      {
        "description": "Cuisinart Coffee Maker, 12-Cup Glass Carafe, Automatic Hot & Iced Coffee Maker, Single Server Brewer, Stainless Steel, SS-16",
        "image": "https://m.media-amazon.com/images/I/81eXmViYcqL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTozNjM2NzY1NzkyNDI2ODk1OjE3Mjc1NTA0MjU6c3BfYXRmOjIwMDE0MzcxNzMyMzE5ODo6MDo6&url=%2FCuisinart-SS-16-Coffee-Center-Stainless%2Fdp%2FB0BP9T2B84%2Fref%3Dsr_1_4_sspa%3Fdib%3DeyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8%26dib_tag%3Dse%26keywords%3Dcoffee%2Bpot%26qid%3D1727550425%26sr%3D8-4-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
        "price": "$36.99",
        "rating": "4.2 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "BLACK+DECKER 5-Cup Coffeemaker, Black, DCM600B",
        "image": "https://m.media-amazon.com/images/I/61vfi0QPv2L._AC_UL320_.jpg",
        "link": "https://www.amazon.com/BLACK-DECKER-Coffeemaker-Black-DCM600B/dp/B001NXC5YC/ref=sr_1_5?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-5",
        "price": "$157.95",
        "rating": "4.5 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "BLACK+DECKER 12-Cup Digital Coffee Maker, Programmable, Washable Basket Filter, Sneak-A-Cup, Auto Brew, Water Window, Keep Hot Plate, Black",
        "image": "https://m.media-amazon.com/images/I/61oCzQ33FXL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/BLACK-DECKER-Programmable-Coffeemaker-CM1160B/dp/B01GJOMWVA/ref=sr_1_6?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-6",
        "price": "$199.95",
        "rating": "4.4 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Amazon Basics 12-Cup Coffee Maker with Reusable Filter, Coffee Pot, Coffee Machine, Black and Stainless Steel",
        "image": "https://m.media-amazon.com/images/I/717WxwMxNML._AC_UL320_.jpg",
        "link": "https://www.amazon.com/AmazonBasics-12-Cup-Coffee-Reusable-Stainless/dp/B084ZH769P/ref=sr_1_7?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-7",
        "price": "$19.99",
        "rating": "3.8 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Tupkee Commercial Coffee Pot Replacement - SHATTER-RESISTANT Restaurant Glass Decanter Carafe - 64 oz 12 Cup, Black Handle/Regular, Compatible with Wilbur Curtis, Bloomfield, Bunn Coffee Pot",
        "image": "https://m.media-amazon.com/images/I/61cFfaZA4zL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo4NjE5MzA1ODg3MTkxNDg5OjE3Mjc1NTA0MjU6c3Bfc2VhcmNoX3RoZW1hdGljOjIwMDAwMjU4ODA5NDYzMTo6MDo6&url=%2FTupkee-Commercial-Coffee-Replacement-SHATTER-RESISTANT%2Fdp%2FB01N303UDH%2Fref%3Dsxin_16_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.aa47d3ff-52c9-4381-95f2-032c3090aaca%253Aamzn1.sym.aa47d3ff-52c9-4381-95f2-032c3090aaca%26cv_ct_cx%3Dcoffee%2Bpot%26dib%3DeyJ2IjoiMSJ9.9GRXQnamApe-4xb-Kc37vkF8T2Zul6LLXcd-jxHATuX1gCPdHayduJQeufxIxttTDyeY1gMrF8X1xGwiaEn6hg.-m8B1GshoKKVjmB0OXz3-a22yFQPoAfjtqAseeIJJ8Q%26dib_tag%3Dse%26keywords%3Dcoffee%2Bpot%26pd_rd_i%3DB01N303UDH%26pd_rd_r%3Db7a5772a-0a94-4b5f-aba3-49feb018917e%26pd_rd_w%3DHpIQw%26pd_rd_wg%3DfXyox%26pf_rd_p%3Daa47d3ff-52c9-4381-95f2-032c3090aaca%26pf_rd_r%3DV9C4T0WQNYQ2ZX95AV95%26qid%3D1727550425%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sr%3D1-1-9428117c-b940-4daa-97e9-ad363ada7940-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1",
        "price": "$26.91",
        "rating": "4.4 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Cuisinart Coffee Maker, Single Serve 72-Ounce Reservoir Coffee Machine, Programmable Brewing & Hot Water Dispenser, Stainless Steel, SS-10P1,Silver",
        "image": "https://m.media-amazon.com/images/I/111mHoVK0kL._SS200_.png",
        "link": "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo4NjE5MzA1ODg3MTkxNDg5OjE3Mjc1NTA0MjU6c3Bfc2VhcmNoX3RoZW1hdGljOjIwMDA4NjE4NjYwMDM5ODo6MTo6&url=%2FCuisinart-Reservoir-Programmable-Dispenser-Stainless%2Fdp%2FB014W1C2VM%2Fref%3Dsxin_16_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.aa47d3ff-52c9-4381-95f2-032c3090aaca%253Aamzn1.sym.aa47d3ff-52c9-4381-95f2-032c3090aaca%26cv_ct_cx%3Dcoffee%2Bpot%26dib%3DeyJ2IjoiMSJ9.9GRXQnamApe-4xb-Kc37vkF8T2Zul6LLXcd-jxHATuX1gCPdHayduJQeufxIxttTDyeY1gMrF8X1xGwiaEn6hg.-m8B1GshoKKVjmB0OXz3-a22yFQPoAfjtqAseeIJJ8Q%26dib_tag%3Dse%26keywords%3Dcoffee%2Bpot%26pd_rd_i%3DB014W1C2VM%26pd_rd_r%3Db7a5772a-0a94-4b5f-aba3-49feb018917e%26pd_rd_w%3DHpIQw%26pd_rd_wg%3DfXyox%26pf_rd_p%3Daa47d3ff-52c9-4381-95f2-032c3090aaca%26pf_rd_r%3DV9C4T0WQNYQ2ZX95AV95%26qid%3D1727550425%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sr%3D1-2-9428117c-b940-4daa-97e9-ad363ada7940-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1",
        "price": "$36.99",
        "rating": "4.4 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "BLACK+DECKER 12-Cup Digital Coffee Maker, Programmable, Washable Basket Filter, Sneak-A-Cup, Auto Brew, Water Window, Keep Hot Plate, Black",
        "image": "https://m.media-amazon.com/images/I/61OwgtcjPML._AC_UL320_.jpg",
        "link": "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo4NjE5MzA1ODg3MTkxNDg5OjE3Mjc1NTA0MjU6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDA1MDAzMjI3OTkwMjo6Mjo6&url=%2FBLACK-DECKER-Programmable-Coffeemaker-CM1160B%2Fdp%2FB01GJOMWVA%2Fref%3Dsxin_16_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.aa47d3ff-52c9-4381-95f2-032c3090aaca%253Aamzn1.sym.aa47d3ff-52c9-4381-95f2-032c3090aaca%26cv_ct_cx%3Dcoffee%2Bpot%26dib%3DeyJ2IjoiMSJ9.9GRXQnamApe-4xb-Kc37vkF8T2Zul6LLXcd-jxHATuX1gCPdHayduJQeufxIxttTDyeY1gMrF8X1xGwiaEn6hg.-m8B1GshoKKVjmB0OXz3-a22yFQPoAfjtqAseeIJJ8Q%26dib_tag%3Dse%26keywords%3Dcoffee%2Bpot%26pd_rd_i%3DB01GJOMWVA%26pd_rd_r%3Db7a5772a-0a94-4b5f-aba3-49feb018917e%26pd_rd_w%3DHpIQw%26pd_rd_wg%3DfXyox%26pf_rd_p%3Daa47d3ff-52c9-4381-95f2-032c3090aaca%26pf_rd_r%3DV9C4T0WQNYQ2ZX95AV95%26qid%3D1727550425%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sr%3D1-3-9428117c-b940-4daa-97e9-ad363ada7940-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1",
        "price": "$23.69",
        "rating": "4.2 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "L'OR Barista System Coffee and Espresso Machine Combo by Philips, Matte White",
        "image": "https://m.media-amazon.com/images/I/61oCzQ33FXL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo4NjE5MzA1ODg3MTkxNDg5OjE3Mjc1NTA0MjU6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDMzMDA5OTQxNzcwMjo6Mzo6&url=%2FLOR-Barista-Espresso-Machine-Philips%2Fdp%2FB0CQMZ1ZZG%2Fref%3Dsxin_16_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.aa47d3ff-52c9-4381-95f2-032c3090aaca%253Aamzn1.sym.aa47d3ff-52c9-4381-95f2-032c3090aaca%26cv_ct_cx%3Dcoffee%2Bpot%26dib%3DeyJ2IjoiMSJ9.9GRXQnamApe-4xb-Kc37vkF8T2Zul6LLXcd-jxHATuX1gCPdHayduJQeufxIxttTDyeY1gMrF8X1xGwiaEn6hg.-m8B1GshoKKVjmB0OXz3-a22yFQPoAfjtqAseeIJJ8Q%26dib_tag%3Dse%26keywords%3Dcoffee%2Bpot%26pd_rd_i%3DB0CQMZ1ZZG%26pd_rd_r%3Db7a5772a-0a94-4b5f-aba3-49feb018917e%26pd_rd_w%3DHpIQw%26pd_rd_wg%3DfXyox%26pf_rd_p%3Daa47d3ff-52c9-4381-95f2-032c3090aaca%26pf_rd_r%3DV9C4T0WQNYQ2ZX95AV95%26qid%3D1727550425%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sr%3D1-4-9428117c-b940-4daa-97e9-ad363ada7940-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1",
        "price": "$29.99",
        "rating": "4.6 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "68oz Coffee Carafe Airpot Insulated Coffee Thermos Urn Stainless Steel Vacuum Thermal Pot Flask for Coffee, Hot Water, Tea, Hot Beverage - Keep 12 Hours Hot, 24 Hours Cold",
        "image": "https://m.media-amazon.com/images/I/71GEbY9sIWL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo4NjE5MzA1ODg3MTkxNDg5OjE3Mjc1NTA0MjU6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDQ0MjgzNDk4MTkwMjo6NDo6&url=%2FInsulated-Thermos-Stainless-Thermal-Beverage%2Fdp%2FB07W4BC765%2Fref%3Dsxin_16_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.aa47d3ff-52c9-4381-95f2-032c3090aaca%253Aamzn1.sym.aa47d3ff-52c9-4381-95f2-032c3090aaca%26cv_ct_cx%3Dcoffee%2Bpot%26dib%3DeyJ2IjoiMSJ9.9GRXQnamApe-4xb-Kc37vkF8T2Zul6LLXcd-jxHATuX1gCPdHayduJQeufxIxttTDyeY1gMrF8X1xGwiaEn6hg.-m8B1GshoKKVjmB0OXz3-a22yFQPoAfjtqAseeIJJ8Q%26dib_tag%3Dse%26keywords%3Dcoffee%2Bpot%26pd_rd_i%3DB07W4BC765%26pd_rd_r%3Db7a5772a-0a94-4b5f-aba3-49feb018917e%26pd_rd_w%3DHpIQw%26pd_rd_wg%3DfXyox%26pf_rd_p%3Daa47d3ff-52c9-4381-95f2-032c3090aaca%26pf_rd_r%3DV9C4T0WQNYQ2ZX95AV95%26qid%3D1727550425%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sr%3D1-5-9428117c-b940-4daa-97e9-ad363ada7940-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1",
        "price": "$119.95",
        "rating": "4.3 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Ninja 12-Cup Programmable Coffee Brewer, 2 Brew Styles, Adjustable Warm Plate, 60oz Water Reservoir, Delay Brew - Black/Stainless Steel",
        "image": "https://m.media-amazon.com/images/I/61tCjltgxIL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Ninja-12-Cup-Programmable-CE251-Stainless/dp/B07S98411N/ref=sr_1_8?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-8",
        "price": "$149.95",
        "rating": "4.4 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Cuisinart Coffee Maker, 14-Cup Glass Carafe, Fully Automatic for Brew Strength Control & 1-4 Cup Setting, Stainless Steel, DCC-3200P1",
        "image": "https://m.media-amazon.com/images/I/81+HcYgDo1L._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Cuisinart-DCC-3200-PerfecTemp-Programmable-Coffeemaker/dp/B00MVWGQX0/ref=sr_1_9?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-9",
        "price": "$36.99",
        "rating": "4.2 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Hamilton Beach 2-Way 12 Cup Programmable Drip Coffee Maker & Single Serve Machine, Glass Carafe, Auto Pause and Pour, Black (49980R)",
        "image": "https://m.media-amazon.com/images/I/71io+Gh4ApL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Hamilton-Beach-49980A-Programmable-Stainless/dp/B00EI7DPPI/ref=sr_1_10?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-10",
        "price": "$199.00",
        "rating": "4.3 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Amazon Basics Programmable Coffeemaker with Carafe and Reusable Filter, Stainless Steel, 12 Cups, Black",
        "image": "https://m.media-amazon.com/images/I/71Pw3Ac8+VL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTozNjM2NzY1NzkyNDI2ODk1OjE3Mjc1NTA0MjU6c3BfbXRmOjIwMDA0OTc4Njg4NzQ0MTo6MDo6&url=%2FAmazon-Basics-Programmable-Coffeemaker-Stainless%2Fdp%2FB084ZGMX1K%2Fref%3Dsr_1_11_ffob_sspa%3Fdib%3DeyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8%26dib_tag%3Dse%26keywords%3Dcoffee%2Bpot%26qid%3D1727550425%26sr%3D8-11-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
        "price": "$19.99",
        "rating": "4.5 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "French Press Coffee Maker 304 Stainless Steel Coffee Press,with 4 Filters System, Heat Resistant Thickness Borosilicate French Press Glass, BPA-Free Brewed Tea Pot Coffee Plunger",
        "image": "https://m.media-amazon.com/images/I/81SFEaWTVxL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTozNjM2NzY1NzkyNDI2ODk1OjE3Mjc1NTA0MjU6c3BfbXRmOjMwMDE3NTU0OTc1NzQwMjo6MDo6&url=%2FYMMIND-Stainless-Resistant-Thickness-Borosilicate%2Fdp%2FB0CBN7JQRN%2Fref%3Dsr_1_12_sspa%3Fdib%3DeyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8%26dib_tag%3Dse%26keywords%3Dcoffee%2Bpot%26qid%3D1727550425%26sr%3D8-12-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
        "price": "$79.99",
        "rating": "4.5 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "BLACK+DECKER 12-Cup Coffee Maker with Easy On/Off Switch, Easy Pour, Non-Drip Carafe with Removable Filter Basket, Vortex Technology, Black",
        "image": "https://m.media-amazon.com/images/I/81kaKQg4KhL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTozNjM2NzY1NzkyNDI2ODk1OjE3Mjc1NTA0MjU6c3BfbXRmOjMwMDA0OTk5Mzc4MzEwMjo6MDo6&url=%2FBLACK-DECKER-CM0915BKD-Non-Drip-Removable%2Fdp%2FB0C8B9V7HR%2Fref%3Dsr_1_13_sspa%3Fdib%3DeyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8%26dib_tag%3Dse%26keywords%3Dcoffee%2Bpot%26qid%3D1727550425%26sr%3D8-13-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
        "price": "$79.95",
        "rating": "4.5 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "OJOJ 4L/133OZ Thermal Coffee Carafe with Pump, Thermal Beverage Dispenser, Coffee Airpot Stainless Steel Coffee Carafe for Hot Drinks Silver",
        "image": "https://m.media-amazon.com/images/I/51r-kXmr2jL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTozNjM2NzY1NzkyNDI2ODk1OjE3Mjc1NTA0MjU6c3BfbXRmOjMwMDEzODI0MTI4NDEwMjo6MDo6&url=%2FOJOJ-Thermal-Beverage-Dispenser-Stainless%2Fdp%2FB0CQC4XSYQ%2Fref%3Dsr_1_14_sspa%3Fdib%3DeyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8%26dib_tag%3Dse%26keywords%3Dcoffee%2Bpot%26qid%3D1727550425%26sr%3D8-14-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
        "price": "$99.95",
        "rating": "4.1 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "BLACK+DECKER 12-Cup* Programmable Coffeemaker, Black",
        "image": "https://m.media-amazon.com/images/I/61r821QK+1L._AC_UL320_.jpg",
        "link": "https://www.amazon.com/BLACK-DECKER-CM1110B-1-Programmable-Coffeemaker/dp/B098CHH298/ref=sr_1_15?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-15",
        "price": "$69.99",
        "rating": "4.6 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "BLACK+DECKER 12 Cup Thermal Programmable Coffee Maker with Brew Strength and VORTEX Technology, Black/Steel",
        "image": "https://m.media-amazon.com/images/I/519W64iPJnL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/BLACK-DECKER-Programmable-Technology-CM2046S/dp/B0C2JK9Y8V/ref=sr_1_16?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-16",
        "price": "$34.99",
        "rating": "4.4 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Taylor Swoden 12-Cup Programmable Coffee Maker, Regular & Strong Brew Drip Coffee Machine for Home and Office, Glass Carafe, Pause & Serve, Auto Shut Off, Black & Stainless Steel",
        "image": "https://m.media-amazon.com/images/I/71W0vqx7jXS._AC_UL320_.jpg",
        "link": "https://www.amazon.comhttps://aax-us-iad.amazon.com/x/c/JFFV_UmSkKoZD0gcxU9Z88oAAAGSOgeLaAEAAAH2AQBvbm9fdHhuX2JpZDcgICBvbm9fdHhuX2ltcDEgICAvQSlN/https://www.amazon.com/Programmable-Machine-Regular-Taylor-Swoden/dp/B085NLFY9F/ref=sxin_25_sbv_search_btf?content-id=amzn1.sym.5cde1a09-4942-4242-87c5-e66d2d3b6a3c%3Aamzn1.sym.5cde1a09-4942-4242-87c5-e66d2d3b6a3c&cv_ct_cx=coffee+pot&dib=eyJ2IjoiMSJ9.VVtT8sBlktHTPE7g9-HSuw.FlfeJI-lvnB5MEMx26jKzEzfXT1oigjnxqILiH9RRhE&dib_tag=se&keywords=coffee+pot&pd_rd_i=B085NLFY9F&pd_rd_r=b7a5772a-0a94-4b5f-aba3-49feb018917e&pd_rd_w=rMbeU&pd_rd_wg=fXyox&pf_rd_p=5cde1a09-4942-4242-87c5-e66d2d3b6a3c&pf_rd_r=V9C4T0WQNYQ2ZX95AV95&qid=1727550425&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=1-1-5190daf0-67e3-427c-bea6-c72c1df98776",
        "price": "$13.99",
        "rating": "4.3 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Mueller 12-Cup Drip Coffee Maker - Borosilicate Carafe, Auto-Off, Reusable Filter, Anti-Drip, Keep-Warm Function, Clear Water Level Window Coffee Machine, Ideal for Home or Office",
        "image": "https://m.media-amazon.com/images/I/61m+Fo4GzDL._AC_UL640_QL65_.jpg",
        "link": "https://www.amazon.com/Programmable-Machine-Regular-Taylor-Swoden/dp/B085NLFY9F/ref=sr_1_17?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-17",
        "price": "$24.99",
        "rating": "4.4 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Programmable Drip Coffee Maker 4-12 Cup, 1000W Fast Brew Coffee Machine with Glass Carafe, 4-Hour Auto Shut Off & Keep Warm, Anti-Drip System, Strong Brew, Coffee Pot For Home Use",
        "image": "https://m.media-amazon.com/images/I/61m+Fo4GzDL._AC_UL640_QL65_.jpg",
        "link": "https://www.amazon.com/Mueller-Function-Anti-Drip-Permanent-Borosilicate/dp/B0BM3C13B6/ref=sr_1_18?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-18",
        "price": "$24.99",
        "rating": "4.3 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Coffee Pod Holder Drawer 2 Tier for K Cup Capsule Pods Storage Organizer Under Coffee Pot Storage Sliding Drawer (Black, 2 Tier)",
        "image": "https://m.media-amazon.com/images/I/61m+Fo4GzDL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTozNjM2NzY1NzkyNDI2ODk1OjE3Mjc1NTA0MjU6c3BfbXRmOjMwMDE1MDY4MzU4NzEwMjo6MDo6&url=%2FEmpstorm-Programmable-Drip-Coffee-Maker%2Fdp%2FB0C6TH7P8Z%2Fref%3Dsr_1_19_sspa%3Fdib%3DeyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8%26dib_tag%3Dse%26keywords%3Dcoffee%2Bpot%26qid%3D1727550425%26sr%3D8-19-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
        "price": "$42.49",
        "rating": "4.2 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Moka Pot Espresso and 5.5 Inch Stainless Steel Induction Plate Adapter, 6 Cup Aluminium Italian Stovetop Espresso Maker, Transparent Cover, Portable Coffee Maker for Camping",
        "image": "https://m.media-amazon.com/images/I/71GdjLEpzdL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTozNjM2NzY1NzkyNDI2ODk1OjE3Mjc1NTA0MjU6c3BfbXRmOjMwMDI3MDc2MzU2NzEwMjo6MDo6&url=%2FDazioter-Capsule-Storage-Organizer-Sliding%2Fdp%2FB0D1KGKL65%2Fref%3Dsr_1_20_sspa%3Fdib%3DeyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8%26dib_tag%3Dse%26keywords%3Dcoffee%2Bpot%26qid%3D1727550425%26sr%3D8-20-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
        "price": "$29.99",
        "rating": "4.2 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "AMASTE Drip Coffee Maker, Coffee Machine with 25 Oz Glass Coffee Pot, Retro Style Coffee Maker with Reusable Coffee Filter & Three Brewing Modes, 30minute-Warm-Keeping, Matcha Green",
        "image": "https://m.media-amazon.com/images/I/111mHoVK0kL._SS200_.png",
        "link": "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTozNjM2NzY1NzkyNDI2ODk1OjE3Mjc1NTA0MjU6c3BfbXRmOjMwMDM5Njg3NzkzMTkwMjo6MDo6&url=%2FESEVOLO-Stainless-Induction-Aluminium-Transparent%2Fdp%2FB0D2CBYT1W%2Fref%3Dsr_1_21_sspa%3Fdib%3DeyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8%26dib_tag%3Dse%26keywords%3Dcoffee%2Bpot%26qid%3D1727550425%26sr%3D8-21-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
        "price": "$60.00",
        "rating": "4.3 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Mr. Coffee Black Coffee Maker, 12 Cups, with Auto Pause and Glass Carafe, Perfect for Home and Office Use",
        "image": "https://m.media-amazon.com/images/I/61AW9MALH4L._AC_UL320_.jpg",
        "link": "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTozNjM2NzY1NzkyNDI2ODk1OjE3Mjc1NTA0MjU6c3BfbXRmOjMwMDEzODIxODEyMzgwMjo6MDo6&url=%2FAmaste-Machine-Reusable-Brewing-30minute-Warm-Keeping%2Fdp%2FB086XCR8L9%2Fref%3Dsr_1_22_sspa%3Fdib%3DeyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8%26dib_tag%3Dse%26keywords%3Dcoffee%2Bpot%26qid%3D1727550425%26sr%3D8-22-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
        "price": "$5.00",
        "rating": "4.1 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Elite Gourmet EHC-5055 Automatic 5-Cup Brew & Drip Coffee Maker with Pause N Serve Reusable Filter, On/Off Switch, Water Level Indicator",
        "image": "https://m.media-amazon.com/images/I/61HDl8+uP0L._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Mr-Coffee-12-Cup-Maker-Black/dp/B002YI2IG0/ref=sr_1_23?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-23",
        "price": "$69.99",
        "rating": "4.2 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Hamilton Beach 12 Cup Programmable Drip Coffee Maker with 3 Brew Options, Glass Carafe, Auto Pause and Pour, Black with Stainless Accents (46299)",
        "image": "https://m.media-amazon.com/images/I/61ireXzLz4L._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Elite-Cuisine-EHC-5055-Automatic-Indicator/dp/B07HYZZBZJ/ref=sr_1_24?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-24",
        "price": "$39.99",
        "rating": "4.6 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Mr. Coffee® 5-Cup Mini Brew Switch Coffee Maker, Black",
        "image": "https://m.media-amazon.com/images/I/61a7BOOkDjL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Hamilton-Beach-46299-Programmable-Coffee/dp/B06XP4DKGL/ref=sr_1_25?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-25",
        "price": "$48.99",
        "rating": "4.0 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Mr. Coffee 14 Cup Programmable Coffee Maker, Stainless Steel",
        "image": "https://m.media-amazon.com/images/I/71LB1AbsorL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Mr-Coffee-2129512-5-Cup-Switch/dp/B08QD33PZ2/ref=sr_1_26?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-26",
        "price": "$39.99",
        "rating": "4.4 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "BLACK+DECKER CM0700B 4-in-1 5-Cup Coffee Station Coffeemaker, Light Black",
        "image": "https://m.media-amazon.com/images/I/71k1Y7D7pdL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Mr-Coffee%C2%AE-14-Cup-Programmable-Coffee/dp/B0C8RYG85N/ref=sr_1_27?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-27",
        "price": "$48.99",
        "rating": "4.3 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Ninja DCM201CP Programmable XL 14-Cup Coffee Maker PRO with Permanent Filter, 2 Brew Styles Classic & Rich, Delay Brew, Freshness Timer & Keep Warm, Dishwasher Safe, Copper",
        "image": "https://m.media-amazon.com/images/I/61nB+VDwegL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/BLACK-DECKER-CM0700B-Coffee-Compact/dp/B07L5NVFNR/ref=sr_1_28?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-28",
        "price": "$29.97",
        "rating": "4.5 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "BLACK+DECKER Split Brew 12-Cup Digital Coffee Maker, CM0122, Iced or Hot Coffee, Programmable, Quick Touch, 4-Hour Keep Warm",
        "image": "https://m.media-amazon.com/images/I/61BZhhKqmdL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Ninja-DCM201CP-Programmable-Freshness-Permanent/dp/B0BBSPFRMN/ref=sr_1_29?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-29",
        "price": "$2.50",
        "rating": "4.4 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Cuisinart 14-Cup Replacement Carafe for Coffee Maker, DCC-2200RC",
        "image": "https://m.media-amazon.com/images/I/71WRwD0vlrL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/BLACK-DECKER-12-Cup-Digital-Programmable/dp/B0CPMF4C5H/ref=sr_1_30?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-30",
        "price": "$49.95",
        "rating": "4.3 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Hamilton Beach One Press Programmable Dispensing Drip Coffee Maker with 12 Cup Internal Brew Pot, Water Reservoir, Black and Silver (47950)",
        "image": "https://m.media-amazon.com/images/I/71Pu24cDifL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Cuisinart-DCC-2200RC-14-Cup-Replacement-Carafe/dp/B000PJ6NWU/ref=sr_1_31?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-31",
        "price": "$44.99",
        "rating": "4.4 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Hamilton Beach FlexBrew Trio 2-Way Coffee Maker, Compatible with K-Cup Pods or Grounds, Combo, Single Serve & Full 12c Pot, Black - Fast Brewing (49902)",
        "image": "https://m.media-amazon.com/images/I/710GUZYjW9L._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Hamilton-Beach-47950-Brewstation-Stainless/dp/B00AF7WUO2/ref=sr_1_32?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-32",
        "price": "$28.99",
        "rating": "4.3 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Holstein Housewares - 5 Cup Drip Coffee Maker - Convenient and User Friendly with Permanent Filter, Borosilicate Glass Carafe, Water Level Indicator, Auto Pause /Serve and Keep Warm Functions, Teal",
        "image": "https://m.media-amazon.com/images/I/711HtDjtudL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Hamilton-Beach-49902-FlexBrew-Compatible/dp/B095HZYNFM/ref=sr_1_33?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-33",
        "price": "$29.99",
        "rating": "4.4 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Hamilton Beach Programmable Coffee Maker, 12 Cups, Front Access Easy Fill, Pause & Serve, 3 Brewing Options, Black (46310)",
        "image": "https://m.media-amazon.com/images/I/71b-PPeGoyL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Holstein-Housewares-HH-0914701E-5-Cup-Coffee/dp/B077V4LNL5/ref=sr_1_34?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-34",
        "price": "$39.99",
        "rating": "4.7 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "12-Cup* Coffeemaker, Programmable, Exclusive VORTEXTM Technology, CM1331S-1",
        "image": "https://m.media-amazon.com/images/I/71wXc3JZE3L._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Hamilton-Beach-46310-Programmable-Coffee/dp/B07684BPLB/ref=sr_1_35?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-35",
        "price": "$69.99",
        "rating": "4.0 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "BUNN Coffee Pot Decanter/Carafe, 2 Black Regular and 1 Orange Decaf, 12 Cup Capacity, Set of 3, Original Version",
        "image": "https://m.media-amazon.com/images/I/716tyaBxAwL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/BLACK-DECKER-CM1331S-1-12-Cup-Silver/dp/B08PC8L7HY/ref=sr_1_36?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-36",
        "price": "$40.00",
        "rating": "4.2 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Farberware Electric Coffee Percolator, FCP240, Stainless Steel Basket, Automatic Keep Warm, No-Drip Spout, 4 Cup",
        "image": "https://m.media-amazon.com/images/I/61aanzJ5lJL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/BUNN-Regular-Coffee-Decanter-Carafe/dp/B00BQ0U1H0/ref=sr_1_37?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-37",
        "price": "$17.99",
        "rating": "4.2 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "BUNN Glass Coffee Pot Decanter/Carafe, Regular, 12 cup Capacity, Black, Set of 2",
        "image": "https://m.media-amazon.com/images/I/71KPjrP9JeL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Farberware-2-4-Cup-Percolator-Stainless-FCP240/dp/B00008ELEA/ref=sr_1_38?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-38",
        "price": "$18.99",
        "rating": "4.3 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Cuisinart 12-Cup Replacement Glass Carafe for Coffee Maker, DCC-1200PRC",
        "image": "https://m.media-amazon.com/images/I/71VnnXOa-9L._AC_UL320_.jpg",
        "link": "https://www.amazon.com/BUNN-Coffee-Decanter-Regular-Capacity/dp/B00WC5GAGE/ref=sr_1_39?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-39",
        "price": "$24.99",
        "rating": "4.4 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Hamilton Beach One Press Programmable Dispensing Drip Coffee Maker with 12 Cup Internal Brew Pot, Water Reservoir, Black with Chrome (48464)",
        "image": "https://m.media-amazon.com/images/I/61cl5SDAwXL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Cuisinart-DCC-1200PRC-12-Cup-Replacement-Carafe/dp/B0000CFNE3/ref=sr_1_40?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-40",
        "price": "$79.99",
        "rating": "4.8 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Presto Stainless-Steel Electric Coffee Percolator, 12-Cups, Silver",
        "image": "https://m.media-amazon.com/images/I/81guMMsAQeL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Hamilton-Beach-48464-Capacity-Brewstation/dp/B001K66LPQ/ref=sr_1_41?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-41",
        "price": "$0.71",
        "rating": "4.3 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "BUNN Coffee Pot Decanter/Carafe Black Regular - New Glass Design Shape - Ergonomic Handle - 12 Cup Capacity (Pack of 3)",
        "image": "https://m.media-amazon.com/images/I/514sfhbnt2L._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Presto-02811-12-Cup-Stainless-Coffee/dp/B00006IV0Q/ref=sr_1_42?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-42",
        "price": "$17.93",
        "rating": "4.8 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Cuisinart DCC-1200P1 Brew Central 12-Cup Programmable Coffeemaker Coffee Maker, Carafe, Brushed Chrome",
        "image": "https://m.media-amazon.com/images/I/71Tstl20lLL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Coffee-Decanter-Carafe-Black-Regular/dp/B07T75Z69K/ref=sr_1_43?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-43",
        "price": "$24.99",
        "rating": "4.7 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Ninja Specialty Coffee Maker, Hot & Iced Coffee, 6 Brew Styles, 8 Sizes, Small Cup to Travel Mug, 10-Cup Carafe, Fold-Away Frother, Permanent Filter, Removable Reservoir, Black, CM401",
        "image": "https://m.media-amazon.com/images/I/71MC-S-EsfL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Cuisinart-DCC-1200-Central-Programmable-Coffeemaker/dp/B00005IBX9/ref=sr_1_44?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-44",
        "price": "$99.99",
        "rating": "4.3 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Bunn-O-Matic BPB2292 Decanter, large, Black",
        "image": "https://m.media-amazon.com/images/I/610eQqgVl2L._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Ninja-Specialty-Fold-Away-Frother-CM401/dp/B07PFLM2LK/ref=sr_1_45?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-45",
        "price": "$1.08",
        "rating": "4.5 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Keurig K-Elite Single Serve K-Cup Pod Coffee Maker, with Strength and Temperature Control, Iced Coffee Capability, 8 to 12oz Brew Size, Programmable, Brushed Slate",
        "image": "https://m.media-amazon.com/images/I/71n-2TLD1RL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Bunn-O-Matic-BPB2292-decanter-large-Black/dp/B00FMWPBSC/ref=sr_1_46?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-46",
        "price": "$49.99",
        "rating": "4.8 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "BLACK+DECKER 12-Cup Replacement Carafe, GC3100B, Duralife Glass, Dishwasher-Safe, 2 Extra Lids",
        "image": "https://m.media-amazon.com/images/I/51aeZOMb2wL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Keurig-K-Elite-Temperature-Capability-Programmable/dp/B078NN17K3/ref=sr_1_47?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-47",
        "price": "$34.95",
        "rating": "4.6 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "KRUPS: Simply Brew, Stainless Steel 10 Cup Coffee Maker, Dishwasher Safe Coffee Pot with Cold Brew, Pause & Brew, and Keep Warm Functions, Drip Coffee Maker",
        "image": "https://m.media-amazon.com/images/I/81BzHbm5GvL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/BLACK-DECKER-Replacement-Duralife-Dishwasher-Safe/dp/B002LAREEC/ref=sr_1_48?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-48",
        "price": "$62.99",
        "rating": "4.6 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "BLACK+DECKER 12-Cup* Programmable Coffeemaker, Black, CM1070B-3",
        "image": "https://m.media-amazon.com/images/I/61HZcaIIYwL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Simply-Stainless-Function-Espresso-Dishwasher/dp/B08PP1H7QK/ref=sr_1_49?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-49",
        "price": "$99.85",
        "rating": "4.8 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Cuisinart Coffee Maker, 12-Cup Glass Carafe, Automatic Hot & Iced Coffee Maker, Single Server Brewer, Stainless Steel, SS-16",
        "image": "https://m.media-amazon.com/images/I/71eood2xIWL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/BLACK-DECKER-Programmable-Coffeemaker-CM1070B-1/dp/B08PCB2HD3/ref=sr_1_50?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-50",
        "price": "$19.47",
        "rating": "4.7 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "BUNN BT BT Speed Brew 10-Cup Thermal Carafe Home Coffee Brewer, Black",
        "image": "https://m.media-amazon.com/images/I/71+sZIoB8pL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Cuisinart-SS-16-Coffee-Center-Stainless/dp/B0BP9T2B84/ref=sr_1_51?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-51",
        "price": "$26.99",
        "rating": "4.5 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "West Bend 33600 Coffee Urn Commercial Highly-Polished Aluminum NSF Approved Features Automatic Temperature Control Large Capacity with Fast Brewing and Easy Clean Up, 100-Cup, Silver",
        "image": "https://m.media-amazon.com/images/I/61KF49ebtKL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/BUNN-Velocity-10-Cup-Thermal-Carafe/dp/B000FFRYYK/ref=sr_1_52?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-52",
        "price": "$49.99",
        "rating": "4.2 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "DeLonghi Glass Coffee Carafe",
        "image": "https://m.media-amazon.com/images/I/71L2x-hXC8L._AC_UL320_.jpg",
        "link": "https://www.amazon.com/West-Bend-33600-Commercial-Temperature/dp/B00004RC6S/ref=sr_1_53?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-53",
        "price": "$36.99",
        "rating": "4.5 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Proctor Silex Coffee Maker, Works with Smart Plugs That are Compatible with Alexa, Auto Pause and Serve, 10-Cup, Black",
        "image": "https://m.media-amazon.com/images/I/81eXmViYcqL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/DeLonghi-7313283649-Glass-Coffee-Carafe/dp/B0166HQGJ4/ref=sr_1_54?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-54",
        "price": "$54.99",
        "rating": "3.8 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "West Bend 58002 Highly Polished Aluminum Commercial Coffee Urn Features Automatic Temperature Control Large Capacity with Quick Brewing Easy Prep and Clean Up, 42-Cup, Silver",
        "image": "https://m.media-amazon.com/images/I/61FDaVlHw4L._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Proctor-Silex-10-Cup-Coffee-Maker-48351/dp/B0089ME5VQ/ref=sr_1_55?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-55",
        "price": "$39.94",
        "rating": "4.4 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Keurig K-Duo Single Serve K-Cup Pod & Carafe Coffee Maker, with Multiple Brew Sizes, 60oz Removable Reservoir, Programmable Auto Brew Carafe, (Gen 1), Black",
        "image": "https://m.media-amazon.com/images/I/8193vnB1R8L._AC_UL320_.jpg",
        "link": "https://www.amazon.com/West-Bend-58002-Commercial-Temperature/dp/B00006WNSN/ref=sr_1_56?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-56",
        "price": "$45.49",
        "rating": "4.3 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "BUNN - BUN321300000 32130.0000 3.0-Liter Lever-Action Airpot, Stainless Steel",
        "image": "https://m.media-amazon.com/images/I/51Ll33F+bAL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Keurig-K-Duo-Coffee-Single-Compatible/dp/B07PC7MHQ8/ref=sr_1_57?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-57",
        "price": "$54.99",
        "rating": "4.7 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Keurig K-Mini Single Serve K-Cup Pod Coffee Maker, 6 to 12oz Brew size, with Cord Storage, Perfect for Small Spaces, Black",
        "image": "https://m.media-amazon.com/images/I/71tOxLpjKbL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/BUNN-32130-0000-3-0-Liter-Lever-Action-Stainless/dp/B001BQEHM4/ref=sr_1_58?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-58",
        "price": "$29.95",
        "rating": "4.2 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Cuisinart DCC-5570 5-Cup Coffeemaker with Stainless Steel Carafe",
        "image": "https://m.media-amazon.com/images/I/819kp4St-1L._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Keurig-K-Mini-Single-Serve-Coffee/dp/B07GV2S1GS/ref=sr_1_59?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-59",
        "price": "$14.98",
        "rating": "4.4 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Zulay Commercial Coffee Maker Stainless Steel - 40 Cup Coffee Urn With Twist-Lock Lid & Cool-Touch Handles - Quick-Brewing Coffee Maker With Keep-Warm Mode For Events & Catering",
        "image": "https://m.media-amazon.com/images/I/61SbjrAeOjL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/Cuisinart-DCC-5570-Coffeemaker-Stainless-Carafe/dp/B0B3G5Z7DR/ref=sr_1_60?dib=eyJ2IjoiMSJ9.8k1loimjbnmKTovj_e9S-wIYzPo4I32Z6Th5OUc_Zf6wfb3ID3_5CURkAkF9syINvM_D2P38tqkF4QRAMyAjeM8IDMSMnHREvuzU0hE5HYy07NctC6FL4Gk24ci1RvUdvpeTaZfC5XAzdiISrwUadATV_aImo1BXxom5ceTTAe-hGw1NCsT9tMD1Fz7bYOvBy-X3HwyzS6l9c5vJciWuFXg3o8qTKDjogsscNLc6Bw7cTk_jdwaMeWKb56bzPLaspk-B7dW1ze-Yljb4rAxiNWGrJGMyP0eO2VtEiIQHEcM.1uXJTaf7naNiQ8cUh_Np9qqyAmJxBs12C3dtXQoUzR8&dib_tag=se&keywords=coffee+pot&qid=1727550425&sr=8-60",
        "price": "$29.99",
        "rating": "4.3 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Heritage66 Thermal Coffee Carafe -Triple Wall Vacuum insulated Flask- Thermos keeping Beverages Hot for 12 hours /24 hours cold Tea, Water, and Coffee Dispenser (2 Liter/68Oz with Brush)",
        "image": "https://m.media-amazon.com/images/I/61nIN8j2tRL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/sspa/click?ie=UTF8&spc=MToyMDEyOTk5NzQ3OTczNjcwOjE3Mjc1NTA0MjU6c3Bfc2VhcmNoX3RoZW1hdGljX2J0ZjozMDAzNTMxMDU3MzY5MDI6OjA6Og&url=%2FZulay-Commercial-Coffee-Maker-Stainless%2Fdp%2FB0D2PGHPWC%2Fref%3Dsxbs_pa_sp_search_thematic_btf_sspa%3Fcontent-id%3Damzn1.sym.0894b7e3-a6d0-4415-80f5-c710cb6f141b%253Aamzn1.sym.0894b7e3-a6d0-4415-80f5-c710cb6f141b%26cv_ct_cx%3Dcoffee%2Bpot%26dib%3DeyJ2IjoiMSJ9.A5yxNxXXxMksLzy7fZYnigrWq7yI8wPXUyyBlYk0JNXe7ywJyRjMh6n0S5pFMhm8VdWq17DWxfQR1Ny1WXHb4w.4AXCmWVTDl2MhAfmzUjOi1ut1JuM6Vh5gdb7_r42VCE%26dib_tag%3Dse%26keywords%3Dcoffee%2Bpot%26pd_rd_i%3DB0D2PGHPWC%26pd_rd_r%3Dc75a98d8-59a4-42fd-bb05-ff3bde122761%26pd_rd_w%3DSAHx0%26pd_rd_wg%3DrtC3O%26pf_rd_p%3D0894b7e3-a6d0-4415-80f5-c710cb6f141b%26pf_rd_r%3DV9C4T0WQNYQ2ZX95AV95%26qid%3D1727550425%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sr%3D1-1-2ce85fbe-2281-435c-ad39-d4a3c51e67ed-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWNfYnRm%26psc%3D1",
        "price": "$34.95",
        "rating": "4.6 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Thermal Coffee Carafe Dispenser by Heritage66 Triple Wall Stainless Steel Thermos Vacuum insulated/Flask Hot Coffee 12 hours Tea, Water 2 Liter /68 OZ (Wide Opening)",
        "image": "https://m.media-amazon.com/images/I/61UTFJux1pL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/sspa/click?ie=UTF8&spc=MToyMDEyOTk5NzQ3OTczNjcwOjE3Mjc1NTA0MjU6c3Bfc2VhcmNoX3RoZW1hdGljX2J0ZjozMDAwNzQ2MTU4MDg5MDI6OjE6Og&url=%2FHeritage66-Stainless-insulated-Retention-Dispenser%2Fdp%2FB09BBKYMGX%2Fref%3Dsxbs_pa_sp_search_thematic_btf_sspa%3Fcontent-id%3Damzn1.sym.0894b7e3-a6d0-4415-80f5-c710cb6f141b%253Aamzn1.sym.0894b7e3-a6d0-4415-80f5-c710cb6f141b%26cv_ct_cx%3Dcoffee%2Bpot%26dib%3DeyJ2IjoiMSJ9.A5yxNxXXxMksLzy7fZYnigrWq7yI8wPXUyyBlYk0JNXe7ywJyRjMh6n0S5pFMhm8VdWq17DWxfQR1Ny1WXHb4w.4AXCmWVTDl2MhAfmzUjOi1ut1JuM6Vh5gdb7_r42VCE%26dib_tag%3Dse%26keywords%3Dcoffee%2Bpot%26pd_rd_i%3DB09BBKYMGX%26pd_rd_r%3Dc75a98d8-59a4-42fd-bb05-ff3bde122761%26pd_rd_w%3DSAHx0%26pd_rd_wg%3DrtC3O%26pf_rd_p%3D0894b7e3-a6d0-4415-80f5-c710cb6f141b%26pf_rd_r%3DV9C4T0WQNYQ2ZX95AV95%26qid%3D1727550425%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sr%3D1-2-2ce85fbe-2281-435c-ad39-d4a3c51e67ed-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWNfYnRm%26psc%3D1",
        "price": "$54.99",
        "rating": "4.5 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "70oz Thermal Coffee Carafe Insulated Coffee Thermos Airpot, Stainless Steel Coffee Carafes Urn For Keeping Hot, Double Walled Insulated Vacuum Flask, Hot Beverage Drink Tea Coffee Dispenser, White",
        "image": "https://m.media-amazon.com/images/I/51iuKJ0J3IL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/sspa/click?ie=UTF8&spc=MToyMDEyOTk5NzQ3OTczNjcwOjE3Mjc1NTA0MjU6c3Bfc2VhcmNoX3RoZW1hdGljX2J0ZjozMDAwNzQ2MTU4MDkwMDI6OjI6Og&url=%2FHeritage66-Stainless-insulated-Retention-Dispenser%2Fdp%2FB0BMDT7SK4%2Fref%3Dsxbs_pa_sp_search_thematic_btf_sspa%3Fcontent-id%3Damzn1.sym.0894b7e3-a6d0-4415-80f5-c710cb6f141b%253Aamzn1.sym.0894b7e3-a6d0-4415-80f5-c710cb6f141b%26cv_ct_cx%3Dcoffee%2Bpot%26dib%3DeyJ2IjoiMSJ9.A5yxNxXXxMksLzy7fZYnigrWq7yI8wPXUyyBlYk0JNXe7ywJyRjMh6n0S5pFMhm8VdWq17DWxfQR1Ny1WXHb4w.4AXCmWVTDl2MhAfmzUjOi1ut1JuM6Vh5gdb7_r42VCE%26dib_tag%3Dse%26keywords%3Dcoffee%2Bpot%26pd_rd_i%3DB0BMDT7SK4%26pd_rd_r%3Dc75a98d8-59a4-42fd-bb05-ff3bde122761%26pd_rd_w%3DSAHx0%26pd_rd_wg%3DrtC3O%26pf_rd_p%3D0894b7e3-a6d0-4415-80f5-c710cb6f141b%26pf_rd_r%3DV9C4T0WQNYQ2ZX95AV95%26qid%3D1727550425%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sr%3D1-3-2ce85fbe-2281-435c-ad39-d4a3c51e67ed-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWNfYnRm%26psc%3D1",
        "price": "$65.59",
        "rating": "4.2 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "ASCOT Electric Kettle, Glass Electric Tea Kettle Gifts for Men/Women/Family 1.5L 1500W Borosilicate Glass Tea Heater, with Auto Shut-Off and Boil-Dry Protection (Beige)",
        "image": "https://m.media-amazon.com/images/I/71JxrtAo9kL._AC_UL320_.jpg",
        "link": "https://www.amazon.com/sspa/click?ie=UTF8&spc=MToyMDEyOTk5NzQ3OTczNjcwOjE3Mjc1NTA0MjU6c3Bfc2VhcmNoX3RoZW1hdGljX2J0ZjozMDAxMDU3ODYwOTkyMDI6OjM6Og&url=%2FThermal-Insulated-Stainless-Beverage-Dispenser%2Fdp%2FB0C6Q266KN%2Fref%3Dsxbs_pa_sp_search_thematic_btf_sspa%3Fcontent-id%3Damzn1.sym.0894b7e3-a6d0-4415-80f5-c710cb6f141b%253Aamzn1.sym.0894b7e3-a6d0-4415-80f5-c710cb6f141b%26cv_ct_cx%3Dcoffee%2Bpot%26dib%3DeyJ2IjoiMSJ9.A5yxNxXXxMksLzy7fZYnigrWq7yI8wPXUyyBlYk0JNXe7ywJyRjMh6n0S5pFMhm8VdWq17DWxfQR1Ny1WXHb4w.4AXCmWVTDl2MhAfmzUjOi1ut1JuM6Vh5gdb7_r42VCE%26dib_tag%3Dse%26keywords%3Dcoffee%2Bpot%26pd_rd_i%3DB0C6Q266KN%26pd_rd_r%3Dc75a98d8-59a4-42fd-bb05-ff3bde122761%26pd_rd_w%3DSAHx0%26pd_rd_wg%3DrtC3O%26pf_rd_p%3D0894b7e3-a6d0-4415-80f5-c710cb6f141b%26pf_rd_r%3DV9C4T0WQNYQ2ZX95AV95%26qid%3D1727550425%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sr%3D1-4-2ce85fbe-2281-435c-ad39-d4a3c51e67ed-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWNfYnRm%26psc%3D1",
        "price": "$42.15",
        "rating": "4.5 out of 5 stars",
        "source": "Amazon"
      },
      {
        "description": "Hamilton Beach 2-Way Programmable Coffee Maker, Single-Serve and 12-Cup Pot, Glass Carafe, Stainless Steel, New, 47650",
        "image": "https://i5.walmartimages.com/seo/Hamilton-Beach-2-Way-Programmable-Coffee-Maker-Single-Serve-and-12-Cup-Pot-Glass-Carafe-Stainless-Steel-New-47650_888b9025-2964-4a2d-80ec-80b1b5728c6f.6ab8fe2953c44bbc67eb7fae2698318f.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
        "link": "https://www.walmart.com/ip/Hamilton-Beach-2-Way-Programmable-Coffee-Maker-Single-Serve-and-12-Cup-Pot-Glass-Carafe-Stainless-Steel-New-47650/809534650?classType=REGULAR",
        "price": "$69.98",
        "rating": "4.4",
        "source": "Walmart"
      },
      {
        "description": "Cuisinart 12 Cup Coffeemaker , Stainless Steel Black",
        "image": "https://i5.walmartimages.com/seo/Cuisinart-12-Cup-Coffeemaker-Stainless-Steel-Black_b8985ea2-62a7-4c87-9867-e2c538980d2e.c6fa724a88d12d44d3cbc2aeda10962f.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
        "link": "https://www.walmart.com/ip/Cuisinart-12-Cup-Coffeemaker-Stainless-Steel-Black/808715278?classType=REGULAR",
        "price": "$59.00",
        "rating": "4.5",
        "source": "Walmart"
      },
      {
        "description": "Suodoka 12 Cup Drip Coffee Maker with Glass Carafe, Brew Strength Control & Appointment Setting, Programmable Coffee Machine with Removable Filter Basket, Clear Water Level Reservoir, Black",
        "image": "https://i5.walmartimages.com/seo/Soudoka-12-Cup-Drip-Coffee-Maker-Glass-Carafe-Brew-Strength-Control-Appointment-Setting-Programmable-Machine-Removable-Filter-Basket-Clear-Water-Leve_d21cd9de-d595-439d-8299-38def1677d5c.85e193f64e1f7e5124322239a84a787f.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
        "link": "https://www.walmart.com/ip/Soudoka-12-Cup-Drip-Coffee-Maker-Glass-Carafe-Brew-Strength-Control-Appointment-Setting-Programmable-Machine-Removable-Filter-Basket-Clear-Water-Leve/6925814747?classType=VARIANT",
        "price": "Now $59.99",
        "rating": "4.5",
        "source": "Walmart"
      },
      {
        "description": "AIRMSEN Stainless Steel 12 Cup Drip Coffee Maker, Programmable Coffee Machine Self-Cleaning",
        "image": "https://i5.walmartimages.com/seo/AIRMSEN-Stainless-Steel-12-Cup-Drip-Coffee-Maker-Programmable-Coffee-Machine-Self-Cleaning_6064e870-9e86-4a6e-b4db-75a33c777c87.f334e46fbd63e2872e70adaea28eed37.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
        "link": "https://www.walmart.com/ip/AIRMSEN-Stainless-Steel-12-Cup-Drip-Coffee-Maker-Programmable-Coffee-Machine-Self-Cleaning/886788561?classType=VARIANT",
        "price": "Now $59.99",
        "rating": "4.6",
        "source": "Walmart"
      },
      {
        "description": "Mainstays Black 5-Cup Drip Coffee Maker, New",
        "image": "https://i5.walmartimages.com/seo/Mainstays-Black-5-Cup-Drip-Coffee-Maker-New_16f77040-27ab-4008-9852-59c900d7a7d9_1.c524f1d9c465e122596bf65f939c8d26.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
        "link": "https://www.walmart.com/ip/Mainstays-Black-5-Cup-Drip-Coffee-Maker-New/53056868?classType=VARIANT",
        "price": "$9.98",
        "rating": "4.4",
        "source": "Walmart"
      },
      {
        "description": "Mainstays 12 Cup Coffee Maker Black, Drip Coffee Maker",
        "image": "https://i5.walmartimages.com/seo/Mainstays-12-Cup-Coffee-Maker-Black-Drip-Coffee-Maker_c6cecda8-0638-416f-a6d9-251b516ab39f.488115bd9ec2591a56a893ff17dcb234.jpeg",
        "link": "https://www.walmart.com/ip/Mainstays-12-Cup-Coffee-Maker-Black-Drip-Coffee-Maker/5162907971?classType=REGULAR",
        "price": "$12.87",
        "rating": "4.6",
        "source": "Walmart"
      },
      {
        "description": "Mr. Coffee 12 Cup Programmable Coffee Maker with Strong Brew, Stainless",
        "image": "https://i5.walmartimages.com/seo/Mr-Coffee-2124440-12-Cup-Programmable-Coffeemaker-Strong-Brew-Selector-Silver_263848e4-066d-41b0-b308-b4a2d715c0f0.909e65c0d78f23ea87eedd576b745989.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
        "link": "https://www.walmart.com/ip/Mr-Coffee-2124440-12-Cup-Programmable-Coffeemaker-Strong-Brew-Selector-Silver/827528899?classType=VARIANT&athbdg=L1102",
        "price": "Now $24.48",
        "rating": "4.4",
        "source": "Walmart"
      },
      {
        "description": "Beautiful 14-Cup Programmable Drip Coffee Maker with Touch-Activated Display, Starry Night by Drew Barrymore, Blue",
        "image": "https://i5.walmartimages.com/seo/Beautiful-14-Cup-Programmable-Drip-Coffee-Maker-with-Touch-Activated-Display-Starry-Night-by-Drew-Barrymore-Blue_63d249c7-4104-4655-8b18-dc1bcf333c38.0758b8ebcfcfdf480f5d6b95d345b7e8.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
        "link": "https://www.walmart.com/ip/Beautiful-14-Cup-Programmable-Drip-Coffee-Maker-with-Touch-Activated-Display-Starry-Night-by-Drew-Barrymore-Blue/5623551110?classType=VARIANT&athbdg=L1600",
        "price": "$59.00",
        "rating": "4.1",
        "source": "Walmart"
      },
      {
        "description": "Mr. Coffee 12 Cup Programmable Coffee Maker with 3 Ways to Brew System",
        "image": "https://i5.walmartimages.com/seo/Mr-Coffee-12-Cup-Programmable-Coffee-Maker-with-3-Ways-to-Brew-System_1dc1c0a4-5812-41db-baf9-6ee532754f63.27887899d8657b6bdb8771ce8f905823.jpeg",
        "link": "https://www.walmart.com/ip/Mr-Coffee-12-Cup-Programmable-Coffee-Maker-with-3-Ways-to-Brew-System/3406383181?classType=REGULAR&athbdg=L1600",
        "price": "$32.67",
        "rating": "4.4",
        "source": "Walmart"
      },
      {
        "description": "Mainstays 12 Cup Programmable Coffee Maker, Drip Coffee Maker",
        "image": "https://i5.walmartimages.com/seo/Mainstays-12-Cup-Programmable-Coffee-Maker-Drip-Coffee-Maker_e2cede2b-e097-491c-b180-dac3ed1c26e8.76dd404cc2c2100a9d1b5177bd316821.jpeg",
        "link": "https://www.walmart.com/ip/Mainstays-12-Cup-Programmable-Coffee-Maker-Drip-Coffee-Maker/2860977484?classType=REGULAR",
        "price": "$19.86",
        "rating": "4.5",
        "source": "Walmart"
      }    
  ];
}
}
