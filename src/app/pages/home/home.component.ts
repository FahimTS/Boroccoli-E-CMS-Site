import { Component } from '@angular/core';
import { Blog } from 'src/app/interfaces/blog';
import { FeaturedProduct } from 'src/app/interfaces/featured-product';
import { Feutured } from 'src/app/interfaces/feutured';
import { Product } from 'src/app/interfaces/product';
import { Testimonial } from 'src/app/interfaces/testimonial';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  product: Product = {
    productImg: '../../assets/img/product/1.webp',
    productTitle: 'Q. s product',
    productRate: '$39.00'
  };
  products: Product[] = [
    {
      productImg: '../../assets/img/product/1.webp',
      productTitle: 'Q. s product',
      productRate: '$39.00'
    },
    {
      productImg: '../../assets/img/product/2.webp',
      productTitle: 'C. v product',
      productRate: '$70.00'
    },
    {
      productImg: '../../assets/img/product/3.webp',
      productTitle: 'H. c d product',
      productRate: '$39.00'
    },
    {
      productImg: '../../assets/img/product/4.webp',
      productTitle: 'K. p v product',
      productRate: '$39.00'
    },
    {
      productImg: '../../assets/img/product/5.webp',
      productTitle: 'L. u c e product',
      productRate: '$99.00'
    },
    {
      productImg: '../../assets/img/product/6.webp',
      productTitle: 'E. s product',
      productRate: '$39.00'
    },
    {
      productImg: '../../assets/img/product/7.webp',
      productTitle: 'J. l p t Praesent adipiscing.',
      productRate: '$19.00'
    },
    {
      productImg: '../../assets/img/product/8.webp',
      productTitle: 'P. s o product',
      productRate: '$33.00'
    }
  ];

  productTwo: Product = {
    productImg: '../../assets/img/product-two/1.webp',
    productTitle: 'W. p m product',
    productRate: '$39.00'
  };
  productsTwo: Product[] = [
    {
      productImg: '../../assets/img/product-two/1.webp',
      productTitle: 'W. p m product',
      productRate: '$39.00'
    },
    {
      productImg: '../../assets/img/product-two/2.webp',
      productTitle: 'ZD. s product',
      productRate: '$70.00'
    },
    {
      productImg: '../../assets/img/product-two/1.webp',
      productTitle: 'ZD. s product',
      productRate: '$39.00'
    },
    {
      productImg: '../../assets/img/product-two/3.webp',
      productTitle: 'W. p m product',
      productRate: '$39.00'
    },
    {
      productImg: '../../assets/img/product-two/4.webp',
      productTitle: 'ZE. v w s product',
      productRate: '$99.00'
    },
    {
      productImg: '../../assets/img/product-two/5.webp',
      productTitle: 'ZE. v w s product',
      productRate: '$39.00'
    },
    {
      productImg: '../../assets/img/product-two/6.webp',
      productTitle: 'J. l p t Praesent adipiscing.',
      productRate: '$19.00'
    },
    {
      productImg: '../../assets/img/product-two/7.webp',
      productTitle: 'X. n/s product title',
      productRate: '$33.00'
    }
  ];

  featuredproduct: FeaturedProduct = {
      productImg: '../../assets/img/featured-product/1.webp',
      productTitle: 'W. p m product',
      productRate: '$39.00'
  }
  featuredproducts: FeaturedProduct[] = [
    {
      productImg: '../../assets/img/featured-product/1.webp',
      productTitle: 'W. p m product',
      productRate: '$39.00'
    },
    {
      productImg: '../../assets/img/featured-product/2.webp',
      productTitle: 'ZD. s product',
      productRate: '$70.00'
    },
    {
      productImg: '../../assets/img/featured-product/3.webp',
      productTitle: 'ZD. s product',
      productRate: '$39.00'
    },
    {
      productImg: '../../assets/img/featured-product/4.webp',
      productTitle: 'W. p m product',
      productRate: '$39.00'
    },
    {
      productImg: '../../assets/img/featured-product/5.webp',
      productTitle: 'ZE. v w s product',
      productRate: '$99.00'
    },
    {
      productImg: '../../assets/img/featured-product/6.webp',
      productTitle: 'ZE. v w s product',
      productRate: '$39.00'
    },
    {
      productImg: '../../assets/img/featured-product/7.webp',
      productTitle: 'J. l p t Praesent adipiscing.',
      productRate: '$19.00'
    },
    {
      productImg: '../../assets/img/featured-product/8.webp',
      productTitle: 'X. n/s product title',
      productRate: '$33.00'
    }
  ];
  testimonial: Testimonial = {
    testiImg: '../../assets/img/testimonial/1.webp',
    testiDes: 'Lorem ipsum ctetur elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua.',
    testiTitle: 'Karlio Plet',
    testiInfo: 'CEO'
  };
  testimonials: Testimonial[] = [
    {
      testiImg: '../../assets/img/testimonial/1.webp',
      testiDes: 'Lorem ipsum ctetur elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua.',
      testiTitle: 'Karlio Plet',
      testiInfo: 'CEO'
    },
    {
      testiImg: '../../assets/img/testimonial/2.webp',
      testiDes: 'Lorem ipsum ctetur elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua.',
      testiTitle: 'Karlio Plet',
      testiInfo: 'CEO'
    },
    {
      testiImg: '../../assets/img/testimonial/3.webp',
      testiDes: 'Lorem ipsum ctetur elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua.',
      testiTitle: 'Karlio Plet',
      testiInfo: 'CEO'
    },
    {
      testiImg: '../../assets/img/testimonial/4.webp',
      testiDes: 'Lorem ipsum ctetur elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua.',
      testiTitle: 'Karlio Plet',
      testiInfo: 'CEO'
    },
  ];
  blog: Blog = {
    blogImg: '../../assets/img/news_feeds/1.webp',
    blogUser: 'by: Fahim Hossen',
    blogQues: "What It's Like Dating Organic Food.",
    blogDate: 'Octobar 28, 2023',
    blogBtn: 'Read More'
  };
  blogs: Blog[] = [
    {
      blogImg: '../../assets/img/news_feeds/1.webp',
      blogUser: 'by: Fahim Hossen',
      blogQues: "What It's Like Dating Organic Food.",
      blogDate: 'Octobar 28, 2023',
      blogBtn: 'Read More'
    },
    {
      blogImg: '../../assets/img/news_feeds/2.webp',
      blogUser: 'by: Fahim Hossen',
      blogQues: "What It's Like Dating Organic Food.",
      blogDate: 'Octobar 28, 2023',
      blogBtn: 'Read More'
    },
    {
      blogImg: '../../assets/img/news_feeds/3.webp',
      blogUser: 'by: Fahim Hossen',
      blogQues: "What It's Like Dating Organic Food.",
      blogDate: 'Octobar 28, 2023',
      blogBtn: 'Read More'
    },

  ];
  feutured: Feutured = {
    feuturedImg: 'https://rntest1.myshopify.com/cdn/shop/t/15/assets/4-track.svg?v=66972495813929308381653315638',
    feuturedTitle: 'Free home delivery',
    feuturedInfo: 'Provide free home delivery for all product over $100'
  };
  feutureds: Feutured[] = [
    {
      feuturedImg: 'https://rntest1.myshopify.com/cdn/shop/t/15/assets/4-track.svg?v=66972495813929308381653315638',
      feuturedTitle: 'Free home delivery',
      feuturedInfo: 'We ensure the product quality that is our main goal'
    },
    {
      feuturedImg: 'https://rntest1.myshopify.com/cdn/shop/t/15/assets/5-madel.svg?v=131010347911593014891653315639',
      feuturedTitle: 'Quality Products',
      feuturedInfo: 'We ensure the product quality that is our main goal'
    },
    {
      feuturedImg: 'https://rntest1.myshopify.com/cdn/shop/t/15/assets/6-return.svg?v=49319843883728486611653315639',
      feuturedTitle: '3 Days Return',
      feuturedInfo: 'Return product within 3 days for any product you buy'
    },
    {
      feuturedImg: 'https://rntest1.myshopify.com/cdn/shop/t/15/assets/7-support.svg?v=168061668629657343601653315640',
      feuturedTitle: 'Online Support',
      feuturedInfo: 'We ensure the product quality that you can trust easily'
    },
  ]

}
