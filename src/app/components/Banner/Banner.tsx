import * as B from "./Banner.styles";

export interface BannerProps {
  imageDesktop: string;
  imageMobile: string;
  title: string;
  subtitle?: string;
}

export default function Banner({
  imageDesktop,
  imageMobile,
  title,
  subtitle,
}: BannerProps) {
  return (
    <B.Wrapper imageDesktop={imageDesktop} imageMobile={imageMobile}>
      <B.Container>
        <B.CallToAction>
            <B.Subtitle>{subtitle}</B.Subtitle>
            <B.Title>{title}</B.Title>
        </B.CallToAction>
      </B.Container>
    </B.Wrapper>
  );
}
