import * as S from "./StarsRating.styles";

export interface StarsRatingProps {
  rating: number;
  maxRating?: number;
}

export default function StarsRating({
  rating,
  maxRating = 5,
}: StarsRatingProps) {
  return (
    <S.Wrapper>
      {[...Array(maxRating)].map((_, index) => {
        return <Star key={index} filled={index <= rating} />;
      })}
    </S.Wrapper>
  );
}

interface StarProps {
  filled: boolean;
}

function Star({ filled = false }: StarProps) {
  return (
    <svg
      width="13"
      height="11"
      viewBox="0 0 13 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {filled ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.70648 8.76908L9.23309 10.7322L8.29722 7.03224L11.413 4.54276L7.31 4.22171L5.70648 0.732239L4.10296 4.22171L0 4.54276L3.11574 7.03224L2.17988 10.7322L5.70648 8.76908Z"
          fill="#F8475F"
        />
      ) : (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0502 4.54276L7.94721 4.21645L6.34369 0.732239L4.74017 4.22171L0.637207 4.54276L3.75295 7.03224L2.81708 10.7322L6.34369 8.76908L9.87029 10.7322L8.94014 7.03224L12.0502 4.54276ZM6.3437 7.78487L4.19806 8.9796L4.76871 6.72697L2.87416 5.21118L5.37359 5.01118L6.3437 2.89013L7.3195 5.01645L9.81894 5.21645L7.92439 6.73224L8.49504 8.98487L6.3437 7.78487Z"
          fill="#F8475F"
        />
      )}
    </svg>
  );
}
