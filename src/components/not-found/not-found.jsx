'use client';
import {
  NotFoundContainer,
  NotFoundInnerContainer,
  NotFoundSubTitle,
  NotFoundText,
  NotFoundTitle,
} from './styles';

function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundInnerContainer>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundSubTitle>Not Found</NotFoundSubTitle>
        <NotFoundText>
          Oops! The page you&apos;re looking for seems to have wandered off into the digital
          wilderness. Let&apos;s get you back on track.
        </NotFoundText>
      </NotFoundInnerContainer>
    </NotFoundContainer>
  );
}

export default NotFound;
