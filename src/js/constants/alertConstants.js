import racingConstants from './racingConstants.js';

const alertConstants = {
  INVALID_CAR_NAME: '자동차 이름을 1~5글자 이내로 입력해주세요!',
  INVALID_RACING_COUNT: `시도할 횟수에 1에서 ${racingConstants.MAX_RACING_COUNT} 사이의 숫자를 입력해주세요!`,
  DUPLICATE_CAR_NAME: '자동차 이름을 중복되지 않게 입력해주세요!',
  CONGRATULATION_MESSAGE: (winnerNames) => `${winnerNames} 축하합니다!`,
};

export default alertConstants;
