import Header from "components/Header/Header";
import { ReactNode } from "react";

interface Props {
    title: string;
    description: string;
    url: string;
    image: string;
    children: ReactNode;
}

const Layout = ({ title, description, url, image, children }: Props) => {
    return (
        <div>
            {/* <Helmet>
          <html lang='ko' />
          <title>{title}</title>
  
          <meta name='description' content={description} />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
  
          <meta property='og:type' content='website' />
          <meta property='og:title' content={title} />
          <meta property='og:description' content={description} />
          <meta property='og:image' content={image} />
          <meta property='og:url' content={url} />
          <meta property='og:site_name' content={title} />
  
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:title' content={title} />
          <meta name='twitter:description' content={description} />
          <meta name='twitter:image' content={image} />
          <meta name='twitter:site' content='@seungjun' />
          <meta name='twitter:creator' content='@seungjun' />
  
          <meta
            name='google-site-verification'
            content='LKTF_tGr3v7xv-1If9MoMWN8tM-_9MPLnelP_dN7Sb0'
          />
  
          <meta
            name='naver-site-verification'
            content='431e2cf8f4cc6b6faae997ca8e2c22d786b9172c'
          />
        </Helmet> */}
            <Header />
            <div>{children}</div>
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;