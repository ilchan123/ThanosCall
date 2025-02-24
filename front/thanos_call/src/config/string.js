export const STRINGS = {
  BASIC_FRAME: {
    CALL_ACTION_BUTTON: {
      ACCEPT_SMALL: "accept",
      ACCEPT: "Accept",
      DECLINE: "Decline",
    },
    CSButtonGroup: {
      CS_MANAGE: "CS 내역 관리",
      CS_MENUAL: "CS 메뉴얼 확인",
      CS_DATA: "CS 데이터 분석",
    },
    CSPROFILECARD: {
      USER_AGE: "나이 : ",
      USER_AGE_ACTUAL: "",
      USER_TODAY_COUNSEL_COUNT: "당일 상담 건수 : ",
      USER_TODAY_COUNSEL_COUNT_ACTUAL: "{cases}통",
      USER_TODAY_COUNSEL_TIME: "당일 상담 시간 :",
      RANK: "{RANK}",
      RANK_REPLACE: "신입",
      NAME: "{NAME}",
      NAME_REPLACE: "홍길동",
      AGE: "{AGE}",
      AGE_REPLACE: "21",
      CASES: "{CASES}",
      CASES_REPLACE: "21",
      DURATION: "{DURATION}",
      DURATION_REPLACE: "52분 13초",
    },
    CS_HEADER: {
      BACK_KEY: "← 뒤로 가기",
    },
  },
  LOGIN_FRAME: {
    LOGIN_BUTTON: {
      LOGIN: "로그인",
      LOGIN_SUCCESS: "로그인 성공!",
    },
    LOGIN_INTERFACE: {
      PLACEHOLDER: "사원 번호 or 사업자 번호",
      PASSWORD: "비밀번호",
    },
    LOGIN_FORM: {
      EMPLOYEE_NUMBER: "사원 번호 or 사업자 번호",
      PASSWORD: "비밀번호",
      LOGIN_SUCCESS: "{name}님, 로그인 성공!",
    },
  },
  CS_LIST_MANAGE: {
    SEARCHBOX: {
      SEARCH_TEXT: "검색 내용을 입력하세요",
    },
    DROPDOWN_BUTTON_GRP: {
      CONSULTER: "상담자",
      CATEGORY: "카테고리",
      COMPLETE_CHECK: "완료 여부",
    },
    DATE_RANGE_PICKER: "적용",
  },
  SERVICES: {
    AUTH_SERVICE: {
      ID_NO_EXIST: "아이디가 존재하지 않습니다.",
      PASSWORD_NO_EXIST: "비밀번호가 일치하지 않습니다.",
      LOGIN_SUCCESS: "로그인 성공!",
      LOGIN_ERROR: "로그인 중 오류가 발생했습니다.",
      ERROR: "로그인 에러",
    },
    FIREBASE: {},
  },
  BOXES: {
    CONSULT_MEMO: {
      CUSTOMER_CONSULT_INPUT: "[회원 상담 입력]",
      CUNSULT_INPUT: "상담시 내용을 입력해 주세요",
    },
    ORDER_DETAILS: {
      CORREC_NUMBER: "올바른 주문 번호를 입력하세요.",
      NOT_FIND_ORDER_INFO: "주문 정보를 찾을 수 없습니다.",
      DATA_TAKE_ERROR: "데이터 불로오기 오류",
      DATA_TAKE_ERROR_INCUR: "데이터를 가져오는 중 오류가 발생했습니다.",
      LOADING: "로딩중...",
      ORDER_NUMBER: "주문 번호: ",
      NAME: "성함: ",
      CONTACT: "연락처: ",
      ADDRESS: "배송지: ",
      PURCHASE_DATE: "구매 일자: ",
      PURCHASE_ITEM: "구매 제품: ",
      BILL_COUNT: "결제 금액: ",
      SHIP_REQUEST_DETAIL: "배송 요청 사항: ",
    },
    QABOXLIST: {
      FAQS: {
        QUESTION_1: "사이즈 교환 문의",
        ANSWER_1: "재고 여부 확인 후 교환 프로세스 안내",
        DETAILS_1:
          "상품의 재고 여부를 먼저 확인한 후 교환 절차를 진행합니다.\n교환 신청 방법과 배송 절차를 안내해 드립니다.",
        QUESTION_2: "배송 지연에 관한 문의",
        ANSWER_2: "운송장 번호 조회 후 예상 소요 시간 안내",
        DETAILS_2:
          "현재 배송 상황을 운송장 번호로 확인할 수 있습니다.\n예상 도착 날짜와 추가 배송 지연 사유를 안내드립니다.",
        QUESTION_3: "제품 불량 항의",
        ANSWER_3: "제품 불량 건에 대한 사고 진행",
        DETAILS_3:
          "제품 불량 신고 후 처리 절차가 진행됩니다.\n반품 및 환불 규정에 따라 보상 여부를 확인해 주세요.",
        QUESTION_4: "상품 반품 문의",
        ANSWER_4: "재고 반품 여부 확인 후 교환 프로세스 안내",
        DETAILS_4:
          "상품의 반품을 원하시면 해당 2-3일 정도의 소요 시간이 걸리게 됩니다. 다시 한번 검토 하신 후 진행하시길 바랍니다.\n반품 가능 여부와 절차는 고객센터에서 더 자세히 안내드립니다.",
        QUESTION_5: "주문 취소 문의",
        ANSWER_5: "주문 취소 가능 여부 및 절차 안내",
        DETAILS_5:
          "결제 완료 후 일정 시간 내에는 주문 취소가 가능합니다.\n자세한 취소 방법과 환불 절차를 안내해 드립니다.",
      },
      NO_SEARCH_RESULT: "검색 결과가 없습니다.",
    },
    RETURN_EXCHANGE: {
      CORREC_NUMBER: "올바른 주문 번호를 입력하세요.",
      NOT_FIND_ORDER_INFO: "주문 정보를 찾을 수 없습니다.",
      DATA_TAKE_ERROR_INCUR: "데이터를 가져오는 중 오류가 발생했습니다.",
      LOADING: "로딩중...",
      CUSTOMER_CONSULT_INFO: "[회원 상담 정보]",
      CS_REQUEST_COUNT: "CS 요청 횟수: {count} 회",
      EXCHANGE_REQUEST_COUNT: "회원 환불 요청 횟수: {count} 회",
      RETURN_REQUEST_COUNT: "반품 요청 횟수: {count} 회",
      INSULT: "상담간 욕설/폭언: {count} 회",
    },
    SEARCHABLE_ORDER_DETAILS: "주문 번호를 입력하세요.",
    SEARCHABLE_QA_LIST: "CS메뉴얼 키워드 검색",
    SEARCHBOX: "검색 내용을 입력하세요",
  },
}
