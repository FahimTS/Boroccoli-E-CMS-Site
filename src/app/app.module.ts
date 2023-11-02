import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './banner/banner.component';
import { ProductComponent } from './product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { ProductTwoComponent } from './product-two/product-two.component';
import { ComboPackageComponent } from './combo-package/combo-package.component';
import { FeaturedProductComponent } from './featured-product/featured-product.component';
import { register } from 'swiper/element/bundle';
import { PopupBannerComponent } from './popup-banner/popup-banner.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { FeuturedComponent } from './feutured/feutured.component';
import { FooterComponent } from './footer/footer.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { ScrollDirective } from './scroll.directive';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { ClaimComponent } from './claim/claim.component';


register();
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    HeaderComponent,
    BannerComponent,
    ProductComponent,
    ProductTwoComponent,
    ComboPackageComponent,
    FeaturedProductComponent,
    PopupBannerComponent,
    TestimonialComponent,
    NewsFeedComponent,
    FeuturedComponent,
    FooterComponent,
    AnnouncementComponent,
    ScrollDirective,
    TermsOfServiceComponent,
    ClaimComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    BrowserAnimationsModule,
    MatTabsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
