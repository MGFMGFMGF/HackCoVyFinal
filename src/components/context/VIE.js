const WEBSITE_NAME = "DoctorAlly";
const WEBSITE_UPDATE_DATE_VIE = "thứ Sáu, ngày 17 tháng 4 năm 2020";
const WEBSITE_ADDRESS_VIE = "Số 1 Đường Hoàng Minh Giám";

const VIE = {
  header: {
    about: "Về chúng mình",
    volunteer: "Tình nguyện",
    request_help: "Yêu cầu giúp đỡ",
    supply_stores: "Cửa hàng gần đây",
    covid19_data: "Dữ liệu Covid-19",
    how_it_works: "Tìm hiểu thêm",
  },

  homepage: {
    volunteer: {
      title: "Tình nguyện",
      description_strong: "Hành động nhỏ loan tỏa yêu thương. ",
      description: "Covid-19 đã khiến cho các y bác sĩ kiệt quệ cả về thể chất lẫn tinh thần. Các bạn có thể góp sức lực của mình vào công cuộc chống đại dịch bằng cách tình nguyện giúp đỡ các y bác sĩ.",
    },
    request_help: {
      title: "Yêu cầu giúp đỡ",
      description_strong: "Tin vào điều tử tế. ",
      description: "Chúng mình hiểu và thông cảm rằng các bạn đang chiến đấu từng ngày cho cộng đồng. Vì thế, chúng mình muốn giúp các bạn. Mỗi khi các bạn cần gì, hãy điền đơn và chúng mình sẽ chuyển đến các tình nguyện viên.",
    },
    supply_stores: {
      title: "Cửa hàng gần đây",
      description_strong: "Tra cứu thuận tiên. ",
      description: "Để phục vụ cho việc tìm kiếm các cửa hàng xung quanh khu vực định sẵn, chúng mình đã tích hợp bản đồ vào dự án. Bản đồ sẽ giúp các bạn tình nguyện viên hình dung được lộ trình di chuyển phù hợp cho bản thân.",
    },
    covid19_data: {
      title: "Dữ liệu Covid-19",
      description_strong: "Cập nhật nhanh chóng. ",
      description: "Việc cập nhật tin tức trong đại dịch đang ngày một trở nên quan trọng. Vì lẽ đó, chúng mình đã tích hợp bản đồ và thống kê để đưa đến những thông tin mới nhất và đầy đủ nhất về Covid-19 của các nước.",
    },
    how_it_works: {
      title: "Tìm hiểu thêm",
      description_strong: "Hướng dẫn sử dụng. ",
      span_b4: "Khi nào các bạn gặp khó khăn trong việc sử dụng trang web của chúng minh, hãy truy cập tại ",
      span_link: " đây ",
      span_af: "để tìm kiếm những thông tin cần thiết nhé! Chúng mình đã chuẩn bị video hướng đãn và bài viết chi tiết rồi đó!",
    },
    about_us: {
      title: "Về chúng mình",
      description_strong: "Đừng ngần ngại kết nối. ",
      span_b4: "Xin chào, rất vui khi có bạn trên trang web của chúng mình. Hãy kết nối mỗi khi bạn có câu hỏi và để chúng mình giúp bạn tìm câu trả lời! Tìm chúng mình tại ",
      span_link: "đây.",
    },
  },

  about: {
    h2: "Đội ngũ chúng mình",
    h3: "Nhân viên y tế cần sự giúp đỡ của các bạn để chống lại COVID-19",
    box: "Tình nguyện hoặc yêu cầu hỗ trợ các bữa ăn, chăm sóc thú cưng, việc vặt, ... trong đại dịch COVID-19."
  },

  // VOLUNTEER
  volunteer: {
    h2_volunteer: "HÃY TRỞ THÀNH MỘT TÌNH NGUYỆN VIÊN",
    p: `Chúng mình đang phát triển mạng lưới cho bác sĩ và tình nguyện viên với mục tiêu đẩy lùi dịch Covid-19. Do đó, sự giúp đỡ của bạn sẽ góp phần rất lớn cho cuộc chiến này và cho toàn thể cộng đồng.
    Hãy là một tình nguyên viên và bạn sẽ nhận được thông báo khi xuất hiện yêu cầu mới.`,
    button: "Ủng hộ nào",
    h2_request: "DANH SÁCH YÊU CẦU",
    search_bar: "Tìm yêu cầu",
    next_button: "Tiếp theo",
    back_button: "Trở lại",
  },
  volunteerSignUp: {
    title: 'ĐƠN TÌNH NGUYỆN',
    description:
      `Chúng mình sẽ liên lạc với bạn khi có yêu cầu ở gần bạn.
    Thông tin cá nhân của bạn sẽ được chúng mình bảo vệ an toàn.`,
    support_kinds: {
      title: "Bạn có thể giúp cung cấp những gì?",
      item1: "Bữa ăn",
      item2: "Thức uống",
      item3: "Khẩu trang",
      item4: "Nước rửa tay",
      item5: "Vật tư y tế",
      item6: "Chăm sóc thú cưng",
      item7: "Giặt ủi",
      item8: "Khác ",
    },
    personal_info: {
      title: "Thông tin cá nhân",
      name_placeholder: "Tên đầy đủ của bạn",
      district_placeholder: "Quận nơi bạn sinh sống",
      ward_placeholder: "Phường nơi bạn sinh sống",
      city_placeholder: "Thành phố nơi bạn sinh sống",
      email_placeholder: "Email của bạn",
      phone_placeholder: "Số điện thoại của bạn",
      signature_placeholder: "Chữ ký của bạn",
      submit_button: "Gửi",
    },
    footer: {
      quote: "“Thước đo của sự giàu có là tình yêu thương”",
      author: "Anne Frank, Vở kịch: Nhật kí của Anne Frank",
    }
  },
  // REQUEST HELP
  request_help: {
    title: "ĐƠN YÊU CẦU",
    description: "Hãy để chúng mình giúp mình có được những gì bạn cần!",
    personal_info: {
      title: "Thông tin cá nhân",
      name_placeholder: "Tên đầy đủ của bạn",
      location_placeholder: "Địa chỉ của bạn",
      facility_placeholder: "Cơ sở y tế của bạn",
      role_placeholder: "Chức danh / vai trò của bạn",
      email_placeholder: "Email của bạn",
      phone_placeholder: "Số điện thoại của bạn"
    },

    support_kinds: {
      title: "Bạn cần hỗ trợ như thế nào?",
      item1: "Vật tư y tế",
      item2: "Khẩu trang",
      item3: "Nước rửa tay",
      item4: "Bữa ăn",
      item5: "Thức uống",
      item6: "Giặt ủi",
      item7: "Chăm sóc thú cưng",
      item8: "Khác",
      request_placeholder: "Mô tả yêu cầu của bạn",
      notice: "* Nếu có thể, vui lòng mô tả chi tiết ngày hoặc thời gian trong tuần mà bạn cần sự giúp đỡ, chế độ ăn uống đặc biệt và bất cứ điều gì mà người trợ giúp cần biết."
    },
    footer: {
      next_button: "TIẾP THEO",
      back_button: "TRỞ LẠI",
      submit_button: "GỬI",
    },
    page: "Trang",
  },

  offer_help: {
    title: 'ĐƠN CHẤP NHẬN GIÚP ĐỠ',
    description: `Thay mặt các bác sĩ, cảm ơn bạn vì sự chân thành và ảnh hưởng tích cực của bạn đối với cộng đồng.`,
    personal_info: {
      title: "Thông tin cá nhân",
      name_placeholder: "Tên đầy đủ của bạn",
      district_placeholder: "Quận nơi bạn sinh sống",
      ward_placeholder: "Phường nơi bạn sinh sống",
      city_placeholder: "Thành phố nơi bạn sinh sống",
      email_placeholder: "Email của bạn",
      phone_placeholder: "Số điện thoại của bạn",
      signature_placeholder: "Chữ ký của bạn",
      submit_button: "Gửi",
    },
    footer: {
      quote: "“Cánh cửa cho một sự khởi đầu mới mở ra khi chúng mình chia sẻ.”",
      author: "― Paul Bradley Smith",
    }
  },

  // NEARBY STORES
  supply_stores: {
    hanoimap: "Bản đồ cung ứng Hà Nội",
    description: "Để hỗ trợ nhân viên y tế, đặc biệt là những người cần nguồn cung cấp thường xuyên như thực phẩm và đồ gia dụng, chúng mình đã tạo ra một bản đồ dễ tiếp cận cho các cửa hàng cung ứng. Điều duy nhất bạn phải làm là nhập địa điểm của bạn và các cửa hàng gần nhất sẽ xuất hiện để bạn chọn!",
    search_placeholder: "Tìm kiếm cửa hàng gần bạn",
    howtouse: "Hướng dẫn sử dụng",
    firstTitle: "Đầu tiên, tìm kiếm vị trí của bạn trên bản đồ",
    firstDescription: "Nó có thể là một địa chỉ, một địa điểm, một khu phố, một khu vực, một mã bưu điện hoặc thậm chí là tọa độ của địa điểm.",
    secondTitle: "Chọn địa điểm",
    secondDescription: "Bạn sẽ tìm thấy vị trí của bạn với các địa điểm khác nhau. Đó là những cửa hàng khoảng 2km gần bạn.",
    thirdTitle: "Khám phá các cửa hàng",
    thirdDescription: "Di chuột qua các cửa hàng để biết chi tiết. Các cửa hàng này được phân loại theo màu sắc như dưới đây.",
    thirdItem1: "Cửa hàng tiện lợi và nhà thuốc",
    thirdItem2: "Thức ăn nhanh, Cafe và Bánh",
    thirdItem3: "Siêu thị",
    thirdItem4: "Nhà hàng và cửa hàng thực phẩm đặc sản",
    thirdItem5: "Cửa hàng tạp hóa và các cửa hàng khác ...",
  },

  covid19_data: {
    loading: "Đang tải",

    longitude: "Kinh độ",
    latitude: "Vĩ độ",
    zoom: "Độ phóng đại",
    mapType: "Bản đồ thế giới",

    search_placeholder: "Tìm kiếm quốc gia",

    country: "Quốc gia",
    continent: "Lục địa",
    today_cases: "Số ca nhiễm hôm nay",
    today_deaths: "Số ca tử vong hôm nay",
    cases: "Ca nhiễm",
    deaths: "Tử vong",
    tests: "Xét nghiệm",
    recovered: "Bình phục",
    active: "Đang nhiễm",
    critical: "Nguy kịch",

    cases_per_million: "Số ca trên một triệu người",
    deaths_per_million: "Số ca tử vong trên một triệu người",
    tests_per_million: "Số ca xét nghiệm trên một triệu người",

    heads: {
      country: "Quốc gia",
      cases: "Ca nhiễm",
      deaths: "Tử vong",
      recovered: "Bình phục",
      active: "Đang nhiễm",
      critical: "Nguy kịch",
      tests: "Xét nghiệm",
      continent: "Lục địa"
    },

    footer: {
      next_button: "Tiếp theo",
      back_button: "Trở lại"
    }

    // Xử lý tên châu lục
  },

  how_it_works: {
    h2_general: {
      title: "Tổng quát",
      p1: "Thông tin cá nhân mà bạn được yêu cầu cung cấp và lý do tại sao bạn được yêu cầu cung cấp thông tin đó sẽ được làm rõ cho bạn tại thời điểm chúng mình yêu cầu bạn cung cấp thông tin cá nhân của bạn.",
      p2: "Khi bạn đăng ký Tài khoản, chúng mình có thể yêu cầu thông tin liên lạc của bạn, bao gồm các mục như tên, tên công ty, địa chỉ, địa chỉ email và số điện thoại.",
      p3: "Nếu bạn liên hệ trực tiếp với chúng mình, chúng mình có thể nhận được thông tin bổ sung về bạn như tên, địa chỉ email, số điện thoại, nội dung của tin nhắn và / hoặc tệp đính kèm bạn có thể gửi cho chúng mình và bất kỳ thông tin nào khác bạn có thể chọn cung cấp.",
      li_1: "Cung cấp, vận hành và duy trì website",
      li_2: "Cải thiện, cá nhân hóa và mở rộng website",
      li_3: "Hiểu và phân tích cách bạn sử dụng website",
      li_4: "Phát triển sản phẩm, dịch vụ, tính năng và chức năng mới",
      li_5: "Trao đổi với bạn, trực tiếp hoặc thông qua một trong các đối tác của chúng mình, bao gồm cả dịch vụ khách hàng, để cung cấp cho bạn các cập nhật và thông tin khác liên quan đến trang web và cho các mục đích tiếp thị và quảng cáo",
      li_6: "Gửi email cho bạn",
      li_7: "Tìm và ngăn chặn lừa đảo",
    },
    for_doctors: {
      title: "Dành riêng cho bác sĩ",
      li_1: "Hãy chọn lựa ai sẽ là người giúp bạn",
      li_2: "Bạn có quyền từ chối sự giúp đỡ nếu bạn cảm thấy bị làm phiền",
      li_3: "Hãy mở lòng, tin vào điều tử tế hiện hữu trong cộng đồng",
    },
    for_volunteers: {
      title: "Dành riêng cho tình nguyện viên",
      li_1: "Hãy đăng ký tham gia dự án bằng tấm lòng chân thành và mong muốn giúp đỡ các bác sĩ",
      li_2: "Luôn nhớ rằng, các y tá, bác sĩ đang ngày đêm túc trực trong bệnh viện giành giật từng sự sống",
      li_3: "Vì vậy, tránh làm phiền họ và hãy có trách nhiệm với sự giúp đỡ của mình",
    },
    notice: {
      title: "Lưu ý",
      description: `Việc đánh giá để đồng ý yêu cầu hoặc đề nghị giúp đỡ trên ${WEBSITE_NAME} rất quan trọng cho sự an toàn của bạn.`,
    },
    footer: `Nếu bạn gặp phải bất kỳ vấn đề nào hoặc muốn hỏi thêm thông tin, hãy gửi email cho chúng mình qua `,
  },


  footer: {
    contact_us: "Về chúng mình",
    feedbacks: "Phản hồi",
    privacy_policy: "Chính sách bảo mật",
    terms_of_use: "Điều khoản sử dụng"
  },

  contact_us: {
    title: "LIÊN HỆ VỚI CHÚNG MÌNH",
    description: "thông qua các liên kết sau"
  },

  // FEEDBACKS
  feedbacks: {
    title: "BẠN NGHĨ GÌ VỀ CHÚNG MÌNH?",
    description: "Chúng mình rất cảm kích phản hồi của bạn. Hy vọng sẽ được hợp tác với bạn trong tương lai",
    personal_info: {
      title: "Thông tin cá nhân",
      name_placeholder: "Tên đầy đủ của bạn",
      email_placeholder: "Email của bạn"
    },
    feedback_section: {
      title: "Phản hồi",
      placeholder: "Phần phản hồi",
    },
    footer: {
      signature_placeholder: "Chữ ký của bạn",
      button: "Gửi"
    }
  },

  // PRIVACY POLICY
  privacy_policy: {
    h1: {
      title: "CHÍNH SÁCH BẢO MẬT",
      p1: `Sửa đổi vào ${WEBSITE_UPDATE_DATE_VIE}`,
      p2_main1: `Tại ${WEBSITE_NAME}, có thể truy cập từ `,
      p2_main2: `, một trong những ưu tiên chính của chúng mình là quyền riêng tư của khách truy cập. Tài liệu Chính sách Bảo mật này chứa các loại thông tin được ${WEBSITE_NAME} thu thập và ghi lại và cách chúng mình sử dụng thông tin đó.`,
      p3: "Nếu bạn có thêm câu hỏi hoặc yêu cầu thêm thông tin về Chính sách Bảo mật của chúng mình, đừng ngần ngại liên hệ với chúng mình.",
      p4: `Chính sách bảo mật này chỉ áp dụng cho các hoạt động trực tuyến của chúng mình và có giá trị đối với khách truy cập vào trang web của chúng mình liên quan đến thông tin mà họ đã chia sẻ và/hoặc thu thập trong ${WEBSITE_NAME} Chính sách này không áp dụng cho bất kỳ thông tin nào được thu thập ngoại tuyến hoặc qua các kênh khác ngoài trang web này.`,
    },
    h2_consent: {
      title: "Sự tán thành",
      p1: "Bằng cách sử dụng trang web của chúng mình, bạn tán thành với Chính sách quyền riêng tư của chúng mình và đồng ý với các điều khoản của nó."
    },
    h2_infoColl: {
      title: "Thông tin chúng mình thu thập",
      p1: "Thông tin cá nhân mà bạn được yêu cầu cung cấp, và lý do tại sao bạn được yêu cầu cung cấp thông tin đó, sẽ được làm rõ cho bạn tại thời điểm chúng mình yêu cầu bạn cung cấp thông tin cá nhân của bạn.",
      p2: "Nếu bạn liên hệ trực tiếp với chúng mình, chúng mình có thể nhận được thông tin bổ sung về bạn như tên, địa chỉ email, số điện thoại, nội dung của tin nhắn và/hoặc tệp đính kèm bạn có thể gửi cho chúng mình và bất kỳ thông tin nào khác bạn có thể chọn cung cấp.",
      p3: "Khi bạn đăng ký Tài khoản, chúng mình có thể yêu cầu thông tin liên lạc của bạn, bao gồm các mục như tên, tên công ty, địa chỉ, địa chỉ email và số điện thoại.",
    },
    h2_infoUse: {
      title: "Cách chúng mình sử dụng thông tin của bạn",
      p1: "Chúng mình sử dụng thông tin chúng mình thu thập theo nhiều cách khác nhau, bao gồm:",
      li_1: "Cung cấp, vận hành và duy trì website của chúng mình",
      li_2: "Cải thiện, cá nhân hóa và mở rộng website của chúng mình",
      li_3: "Hiểu và phân tích cách bạn sử dụng website của chúng mình",
      li_4: "Phát triển sản phẩm, dịch vụ, tính năng và chức năng mới",
      li_5: "Giao tiếp với bạn, trực tiếp hoặc thông qua một trong các đối tác của chúng mình, bao gồm cả dịch vụ khách hàng, để cung cấp cho bạn các cập nhật và thông tin khác liên quan đến website và cho các mục đích tiếp thị và quảng cáo",
      li_6: "Gửi email cho bạn",
      li_7: "Tìm và ngăn chặn gian lận",
    },
    h2_log: {
      title: "Tệp Nhật kí",
      p1: "tuân theo quy trình chuẩn sử dụng tệp nhật ký. Những tập tin này ghi lại khách khi họ truy cập trang web. Tất cả các công ty lưu trữ làm điều này và một phần phân tích của dịch vụ lưu trữ. Thông tin được thu thập bởi các tệp nhật ký bao gồm địa chỉ giao thức internet (IP), loại trình duyệt, Nhà cung cấp dịch vụ Internet (ISP), dấu ngày và thời gian, trang giới thiệu/thoát và có thể số lần nhấp. Chúng không được liên kết với bất kỳ thông tin có thể nhận dạng cá nhân. Mục đích của thông tin là để phân tích xu hướng, quản trị trang web, theo dõi chuyển động của người dùng trên trang web và thu thập thông tin nhân khẩu học.",
    },
    h2_advertising: {
      title: "Chính sách bảo mật với Đối tác Quảng cáo",
      p1: `Bạn có thể tham khảo danh sách này để tìm Chính sách bảo mật cho từng đối tác quảng cáo của ${WEBSITE_NAME}`,
      p2: `Máy chủ quảng cáo hoặc mạng quảng cáo của bên thứ ba sử dụng các công nghệ như cookie, JavaScript hoặc Web Beacons được sử dụng trong các quảng cáo và liên kết tương ứng xuất hiện trên ${WEBSITE_NAME}, được gửi trực tiếp đến trình duyệt của người dùng. Họ tự động nhận địa chỉ IP của bạn khi điều này xảy ra. Những công nghệ này được sử dụng để đo lường hiệu quả của các chiến dịch quảng cáo của họ và/hoặc để cá nhân hóa nội dung quảng cáo mà bạn thấy trên các trang web mà bạn truy cập.`,
      p3: `Lưu ý rằng ${WEBSITE_NAME} không có quyền truy cập hoặc kiểm soát các cookie được sử dụng bởi các nhà quảng cáo bên thứ ba này.`,
    },
    h2_third_party: {
      title: "Chính sách bảo mật của Bên thứ ba",
      p1: `Chính sách bảo mật của ${WEBSITE_NAME} không áp dụng cho các nhà quảng cáo hoặc trang web khác. Do đó, chúng mình khuyên bạn nên tham khảo Chính sách bảo mật tương ứng của các máy chủ quảng cáo bên thứ ba này để biết thêm thông tin chi tiết. Nó có thể bao gồm các giao thiệp và hướng dẫn của họ về cách từ chối các tùy chọn nhất định. Bạn có thể tìm thấy một danh sách đầy đủ các Chính sách quyền riêng tư này và các liên kết của chúng ở đây: Liên kết chính sách bảo mật.`,
      p2: "Bạn có thể chọn tắt cookie thông qua các tùy chọn trình duyệt cá nhân. Để biết thông tin chi tiết hơn về quản lý cookie với các trình duyệt web cụ thể, có thể tìm thấy nó tại các trang web tương ứng của trình duyệt.",
    },
    h2_ccpa: {
      title: "Quyền riêng tư CCPA (Không bán thông tin cá nhân của mình)",
      p1: "Theo CCPA, trong số các quyền khác, người tiêu dùng California có quyền:",
      p2: "Yêu cầu doanh nghiệp thu thập dữ liệu cá nhân của người tiêu dùng tiết lộ các danh mục và mẫu dữ liệu cá nhân cụ thể mà doanh nghiệp đã thu thập về người tiêu dùng.",
      p3: "Yêu cầu doanh nghiệp xóa bất kỳ dữ liệu cá nhân nào về người tiêu dùng mà doanh nghiệp đã thu thập.",
      p4: "Nếu bạn đưa ra yêu cầu, chúng mình có một tháng để trả lời bạn. Nếu bạn muốn thực hiện bất kỳ quyền nào trong số này, vui lòng liên hệ với chúng mình.",
    },
    h2_gdpr: {
      title: "Quyền bảo vệ dữ liệu GDPR",
      p1: "Chúng mình muốn đảm bảo bạn biết đầy đủ tất cả các quyền bảo vệ dữ liệu của mình. Mọi người dùng đều được hưởng những điều sau đây:",
      p2: "Quyền truy cập - Bạn có quyền yêu cầu các bản sao dữ liệu cá nhân của mình. Chúng mình có thể tính một khoản phí nhỏ cho dịch vụ này.",
      p3: "Quyền cải chính - Bạn có quyền yêu cầu chúng mình sửa bất kỳ thông tin nào bạn cho là không chính xác. Bạn cũng có quyền yêu cầu chúng mình hoàn thành thông tin mà bạn cho là không đầy đủ.",
      p4: "Quyền xóa - Bạn có quyền yêu cầu chúng mình xóa dữ liệu cá nhân của bạn, trong một số điều kiện nhất định.",
      p5: "Quyền hạn chế xử lý - Bạn có quyền yêu cầu chúng mình hạn chế xử lý dữ liệu cá nhân của bạn, trong một số điều kiện nhất định.",
      p6: "Quyền phản đối xử lý - Bạn có quyền phản đối việc chúng mình xử lý dữ liệu cá nhân của bạn, trong những điều kiện nhất định.",
      p7: "Quyền chuyển đổi dữ liệu - Bạn có quyền yêu cầu chúng mình chuyển dữ liệu mà chúng mình đã thu thập sang một tổ chức khác hoặc trực tiếp cho bạn, trong một số điều kiện nhất định.",
      p8: "Nếu bạn đưa ra yêu cầu, chúng mình có một tháng để trả lời bạn. Nếu bạn muốn thực hiện bất kỳ quyền nào trong số này, vui lòng liên hệ với chúng mình.",
    },
    h2_childrenInfo: {
      title: "Thông tin trẻ em",
      p1: "Một phần ưu tiên khác của chúng mình là bổ sung sự bảo vệ cho trẻ em khi sử dụng internet. Chúng mình khuyến khích phụ huynh và người giám hộ quan sát, tham gia và/hoặc giám sát và hướng dẫn hoạt động trực tuyến của họ.",
      p2: `${WEBSITE_NAME} không cố ý thu thập bất kỳ Thông tin nhận dạng cá nhân nào từ trẻ em dưới 13 tuổi. Nếu bạn nghĩ rằng con bạn đã cung cấp loại thông tin này trên trang web của chúng mình, chúng mình khuyến khích bạn liên hệ với chúng mình ngay lập tức và chúng mình sẽ nỗ lực hết sức để loại bỏ kịp thời thông tin đó từ hồ sơ của chúng mình.`
    }
  },


  // TERMS_OF_USE
  terms_of_use: {
    h1: {
      title: "ĐIỀU KHOẢN SỬ DỤNG",
      p1: `Sửa đổi vào ${WEBSITE_UPDATE_DATE_VIE}`,
      p2_main1: `Trang web ${WEBSITE_NAME} đặt tại `,
      p2_main2: ` là một sản phẩm có bản quyền thuộc ${WEBSITE_NAME}. Một số tính năng của Trang web phải tuân theo các nguyên tắc, điều khoản hoặc quy tắc bổ sung sẽ được đăng trên Trang web liên quan đến các tính năng đó.`,
      p3: "Tất cả các điều khoản, hướng dẫn và quy tắc bổ sung như vậy được kết hợp bằng cách tham khảo các Điều khoản này.",
      p4: `Các Điều khoản sử dụng này mô tả các điều khoản và điều kiện ràng buộc về mặt pháp lý giám sát việc bạn sử dụng Trang web. BẰNG VIỆC ĐĂNG NHẬP VÀO TRANG WEB, BẠN ĐANG TU N THỦ NHỮNG ĐIỀU KHOẢN NÀY và bạn tuyên bố rằng bạn có thẩm quyền và năng lực để tham gia vào các Điều khoản này. BẠN PHẢI ÍT NHẤT 18 TUỔI TUỔI ĐỂ TRUY CẬP TRANG WEB. NẾU BẠN KHÔNG ĐỒNG Ý VỚI TẤT CẢ CÁC QUY ĐỊNH CỦA CÁC ĐIỀU KHOẢN NÀY, KHÔNG ĐĂNG NHẬP VÀ/HOẶC SỬ DỤNG TRANG WEB.`,
      p5: "Các điều khoản này yêu cầu sử dụng trọng tài phần 10.2 trên cơ sở cá nhân để giải quyết tranh chấp cũng như hạn chế các biện pháp khắc phục có sẵn cho bạn trong trường hợp tranh chấp."
    },
    h2_access: {
      title: "Truy cập vào trang web",
      p1_strong: `Theo các Điều khoản này.`,
      p1_main: ` Công ty cấp cho bạn giấy phép không thể chuyển nhượng, không độc quyền, có thể hủy ngang, giới hạn để truy cập Trang web chỉ cho mục đích sử dụng cá nhân, phi thương mại của riêng bạn.`,
      p2_strong: `Một số hạn chế nhất định.`,
      p2_main: ` Các quyền được chấp thuận cho bạn trong các Điều khoản này tuân theo các hạn chế sau: (a) bạn sẽ không bán, thuê, cho thuê, chuyển nhượng, chỉ định, phân phối, lưu trữ hoặc khai thác thương mại trên Trang web; (b) bạn sẽ không thay đổi, tạo các tác phẩm phái sinh, tháo rời, biên dịch ngược hoặc thiết kế ngược bất kỳ phần nào của Trang web; (c) bạn sẽ không truy cập Trang web để xây dựng một trang web tương tự hoặc cạnh tranh; và (d) trừ khi được nêu rõ trong tài liệu này, không một phần nào của Trang web có thể được sao chép, tái sử dụng để sản xuất, phân phối, tái bản, tải xuống, hiển thị, đăng hoặc truyền dưới bất kỳ hình thức nào nếu không được được chỉ dẫn, bất kỳ bản phát hành, cập nhật nào trong tương lai hoặc chức năng khác được thêm vào của Trang web phải tuân theo các Điều khoản này. Tất cả các bản quyền và thông báo độc quyền khác trên Trang web phải được giữ lại trên tất cả các bản sao của nó.`,
      p3: "Công ty có quyền thay đổi, đình chỉ hoặc ngừng Trang web mà không cần thông báo cho bạn. Bạn đã chấp thuận rằng Công ty sẽ không chịu trách nhiệm với bạn hoặc bất kỳ bên thứ ba nào về bất kỳ thay đổi, gián đoạn hoặc chấm dứt Trang web hoặc bất kỳ phần nào.",
      p4_strong: `Không hỗ trợ hoặc bảo trì.`,
      p4_main: ` Bạn đồng ý rằng Công ty sẽ không có nghĩa vụ cung cấp cho bạn bất kỳ hỗ trợ nào liên quan đến Trang web.`,
      p5: "Ngoại trừ bất kỳ Nội dung người dùng nào bạn có thể cung cấp, bạn hiểu rõ rằng tất cả các quyền sở hữu trí tuệ, bao gồm bản quyền, bằng sáng chế, nhãn hiệu và bí mật thương mại, trong Trang web và nội dung của nó thuộc sở hữu của Công ty hoặc các các bên cung cấp của Công ty. Lưu ý rằng các Điều khoản và quyền truy cập vào Trang web này không cung cấp cho bạn bất kỳ quyền, tiêu đề hoặc lợi ích nào đối với bất kỳ quyền sở hữu trí tuệ nào, ngoại trừ các quyền truy cập hạn chế được nêu trong Mục 2.1. Công ty và nhà cung cấp của mình bảo lưu tất cả các quyền không được cấp trong các Điều khoản này.",
    },
    h2_ads: {
      title: "Liên kết & Quảng cáo của bên thứ ba; Người dùng khác",
      p1_strong: `Liên kết & Quảng cáo của Bên Thứ Ba.`,
      p1_main: ` Trang web có thể chứa các liên kết đến các trang web và dịch vụ của bên thứ ba và/hoặc hiển thị quảng cáo cho bên thứ ba. Các Liên kết & Quảng cáo của Bên Thứ Ba như vậy không thuộc quyền kiểm soát của Công ty và Công ty không chịu trách nhiệm cho bất kỳ Liên kết & Quảng cáo của Bên Thứ Ba nào. Công ty chỉ cung cấp quyền truy cập vào các Liên kết & Quảng cáo của Bên Thứ Ba này để thuận tiện cho bạn và không xem xét, phê duyệt, giám sát, chứng thực, bảo đảm hoặc đưa ra bất kỳ tuyên bố nào liên quan đến Liên kết & Quảng cáo của Bên Thứ Ba. Bạn tự chịu rủi ro khi sử dụng tất cả các Liên kết & Quảng cáo của Bên Thứ Ba và nên áp dụng mức độ thận trọng và nhận thức phù hợp khi thực hiện. Khi bạn nhấn vào bất kỳ Liên kết & Quảng cáo của bên thứ ba nào, các điều khoản và chính sách của bên thứ ba hiện hành sẽ được áp dụng, bao gồm cả việc thu thập dữ liệu và quyền riêng tư của bên thứ ba.`,
      p2_strong: `Người dùng khác.`,
      p2_main: ` Mỗi người dùng Trang chịu trách nhiệm riêng cho bất kỳ và tất cả Nội dung Người dùng của riêng mình. Vì chúng mình không kiểm soát Nội dung Người dùng, bạn công nhận và đồng ý rằng chúng mình không chịu trách nhiệm cho bất kỳ Nội dung Người dùng nào, cho dù do bạn hoặc người khác cung cấp . Bạn đồng ý rằng Công ty sẽ không chịu trách nhiệm cho bất kỳ tổn thất hoặc thiệt hại nào phát sinh do kết quả của bất kỳ tương tác nào như vậy. Nếu có tranh chấp giữa bạn và bất kỳ người dùng Trang web nào, chúng mình không có nghĩa vụ phải tham gia.`,
      p3: `Qua đây, bạn giải phóng Công ty và các cán bộ, nhân viên, đại lý, người kế nhiệm và chuyển nhượng của chúng mình khỏi, và từ đó từ bỏ, từng tranh chấp, yêu cầu, quyền, nghĩa vụ, hành động và nguyên nhân của hành động của mọi loại với mọi bản chất, mà đã phát sinh hoặc phát sinh trực tiếp hoặc gián tiếp hoặc liên quan trực tiếp hoặc gián tiếp đến Trang web. Nếu bạn là cư dân California, bạn sẽ từ bỏ bộ luật dân sự California năm 1542 liên quan đến quy định trên, trong đó nêu rõ: "một bản phát hành chung không mở rộng cho các khiếu nại mà chủ nợ không biết hoặc nghi ngờ tồn tại ở thời gian thực hiện việc phát hành, mà nếu anh ấy hoặc cô ấy biết phải ảnh hưởng nghiêm trọng đến việc giải quyết của anh ấy hoặc cô ấy với người nợ."`,
    },
    h2_disclaimer: {
      title: "Khước từ",
      p1: `Trang web được cung cấp trên cơ sở "như hiện tại" và "có sẵn", và công ty và nhà cung cấp của chúng mình từ chối bất kỳ và tất cả các bảo đảm và điều kiện dưới bất kỳ hình thức nào, dù rõ ràng, ngụ ý hay theo luật định, bao gồm tất cả các bảo đảm hoặc điều kiện bán hàng, năng lực cho một mục đích cụ thể, tiêu đề, hưởng thụ yên tĩnh (Bên cung cấp không gây ra bất kì khó khăn nào cho Người dùng), tính chính xác hay sự không xâm phạm. Chúng mình và các nhà cung cấp của chúng mình không đảm bảo rằng trang web sẽ đáp ứng các yêu cầu của bạn, hay sẽ có sẵn trên cơ sở không bị gián đoạn, kịp thời, an toàn hoặc không có lỗi, hoặc sẽ chính xác, đáng tin cậy, không có vi-rút hoặc mã độc hại khác, hoàn chỉnh, hợp pháp hoặc an toàn. Nếu luật áp dụng yêu cầu bất kỳ sự bảo hành nào liên quan đến trang web, tất cả các sự bảo hành như vậy được giới hạn trong thời hạn đến chín mươi (90) ngày kể từ ngày sử dụng đầu tiên.`,
      p2: `Một số khu vực pháp lý không cho phép loại trừ các bảo hành có ngụ ý, vì vậy loại trừ trên có thể không áp dụng cho bạn. Một số khu vực pháp lý không cho phép các giới hạn về thời gian bảo hành ngụ ý kéo dài bao lâu, vì vậy giới hạn trên có thể không áp dụng cho bạn.`,
    },
    h2_limitation: {
      title: "Giới hạn trách nhiệm pháp lý",
      p1: `Trong phạm vi tối đa được pháp luật cho phép, trong mọi trường hợp, công ty hoặc nhà cung cấp của chúng mình sẽ không chịu trách nhiệm với bạn hoặc bất kỳ bên thứ ba nào về bất kỳ lợi nhuận bị mất, dữ liệu bị mất, chi phí mua sắm sản phẩm thay thế, hoặc bất kỳ thiệt hại gián tiếp, là hậu quả, để cảnh báo, ngẫu nhiên, đặc biệt hoặc các trừng phạt phát sinh từ hoặc liên quan đến các điều khoản này hoặc việc bạn sử dụng hoặc không có khả năng sử dụng trang web ngay cả khi công ty đã được thông báo về khả năng thiệt hại đó. Việc truy cập và sử dụng trang web theo quyết định và rủi ro của riêng bạn và bạn sẽ tự chịu trách nhiệm về mọi thiệt hại cho thiết bị hoặc hệ thống máy tính của mình hoặc mất dữ liệu từ đó.`,
      p2: `Trong phạm vi tối đa được pháp luật cho phép, bất kể mọi thứ trái ngược trong tài liệu này, trách nhiệm của chúng mình đối với bạn đối với mọi thiệt hại phát sinh từ hoặc liên quan đến thỏa thuận này, sẽ luôn bị giới hạn ở mức tối đa năm mươi đô la Mỹ (50 đô la Mỹ). Sự tồn tại của nhiều yêu cầu sẽ không mở rộng giới hạn này. Bạn đồng ý rằng các nhà cung cấp của chúng mình sẽ không có bất kỳ trách nhiệm pháp lý nào phát sinh hoặc liên quan đến thỏa thuận này.`,
      p3: `Một số khu vực pháp lý không cho phép giới hạn hoặc loại trừ trách nhiệm đối với các thiệt hại ngẫu nhiên hoặc do hậu quả, do đó, giới hạn hoặc loại trừ trên có thể không áp dụng cho bạn.`,
      p4_strong: `Thời hạn và sự chấm dứt.`,
      p4_main: ` Theo Mục này, các Điều khoản này sẽ vẫn có hiệu lực đầy đủ trong khi bạn sử dụng Trang web. Chúng mình có thể đình chỉ hoặc chấm dứt quyền sử dụng Trang của bạn bất cứ lúc nào vì bất kỳ lý do nào theo quyết định riêng của chúng mình, bao gồm mọi trường hợp sử dụng Trang vi phạm các Điều khoản này. Khi chấm dứt các quyền của bạn theo các Điều khoản này, Tài khoản và quyền truy cập và sử dụng Trang web của bạn sẽ chấm dứt ngay lập tức. Bạn hiểu rằng bất kì sự chấm dứt Tài khoản của bạn có thể liên quan đến việc xóa Nội dung Người dùng được liên kết với Tài khoản của bạn khỏi cơ sở dữ liệu trực tiếp của chúng mình. Công ty sẽ không có bất kỳ trách nhiệm pháp lý nào đối với bạn khi bạn chấm dứt các quyền của bạn theo các Điều khoản này. Ngay cả sau khi các quyền của bạn theo các Điều khoản này bị chấm dứt, các quy định sau đây của các Điều khoản này sẽ vẫn có hiệu lực: Phần 2 đến 2.5, Mục 3 và Mục 4 đến 10.`
    },
    h2_copyright: {
      title: "Chính sách bản quyền.",
      p1: `Công ty tôn trọng tài sản trí tuệ của người khác và yêu cầu người dùng Trang web của chúng mình cũng làm như vậy. Liên quan đến Trang web của chúng mình, chúng mình đã thông qua và thực thi chính sách tôn trọng luật bản quyền mà quy định loại bỏ bất kỳ tài liệu vi phạm nào và chấm dứt người dùng Trang web trực tuyến của chúng mình mà vi phạm quyền sở hữu trí tuệ, kể cả bản quyền. Nếu bạn tin rằng một trong những người dùng của chúng mình, thông qua việc sử dụng Trang web của chúng mình, đã vi phạm bản quyền một cách bất hợp pháp trong tác phẩm và muốn xóa tài liệu bị cáo buộc vi phạm, thông tin sau đây dưới dạng thông báo bằng văn bản (theo điều khoản 17 U.S.C § 512 (c)) phải được cung cấp cho Đại lý Bản quyền được chỉ định của chúng mình:`,
      li_1: `chữ ký vật lý hoặc điện tử của bạn;`,
      li_2: `nhận dạng tác phẩm có bản quyền mà bạn cho là đã bị vi phạm;`,
      li_3: `nhận dạng tài liệu trên các dịch vụ của chúng mình mà bạn cho là vi phạm và bạn yêu cầu chúng mình xóa;`,
      li_4: `thông tin đầy đủ để cho phép chúng mình xác định vị trí vật liệu đó;`,
      li_5: `địa chỉ, số điện thoại và địa chỉ email của bạn;`,
      li_6: `Tuyên bố rằng bạn có niềm tin thiện chí rằng việc sử dụng tài liệu bị phản đối không được chủ sở hữu bản quyền, đại lý của nó hoặc theo luật pháp cho phép; và`,
      li_7: `Tuyên bố rằng thông tin trong thông báo là chính xác và chịu hình phạt khai man, rằng bạn là chủ sở hữu bản quyền bị cáo buộc vi phạm hoặc bạn được ủy quyền hành động thay mặt chủ sở hữu bản quyền.`,
      p2: `Xin lưu ý rằng, theo điều khoản 17 U.S.C § 512 (f), bất kỳ sự trình bày sai sự thật vật chất nào trong một thông báo bằng văn bản sẽ tự động khiến bên khiếu nại phải chịu trách nhiệm cho bất kỳ thiệt hại, chi phí và phí luật sư nào phát sinh từ chúng mình liên quan đến thông báo bằng văn bản và cáo buộc vi phạm bản quyền.`
    },
    h2_general: {
      title: "Tổng hợp",
      p1: `Các Điều khoản này có thể được sửa đổi thường xuyên và nếu chúng mình thực hiện bất kỳ thay đổi đáng kể nào, chúng mình sẽ thông báo cho bạn bằng cách gửi email đến địa chỉ email cuối cùng mà bạn cung cấp cho chúng mình và/hoặc bằng cách đăng thông báo về những thay đổi trên Trang web chúng mình. Bạn có trách nhiệm cung cấp cho chúng mình địa chỉ email mới nhất của bạn. Trong trường hợp địa chỉ email cuối cùng mà bạn cung cấp cho chúng mình không hợp lệ, việc chúng mình gửi email chứa thông báo đó vẫn được coi là thông báo hiệu quả về những thay đổi được mô tả trong thông báo. Mọi thay đổi đối với các Điều khoản này sẽ có hiệu lực sớm nhất trong ba mươi (30) ngày theo lịch sau khi chúng mình gửi thông báo qua email cho bạn hoặc ba mươi (30) ngày theo lịch sau khi chúng mình đăng thông báo về các thay đổi trên Trang web của chúng mình. Những thay đổi này sẽ có hiệu lực ngay lập tức đối với người dùng mới của Trang web của chúng mình. Việc tiếp tục sử dụng Trang web của chúng mình sau thông báo về những thay đổi đó sẽ thể hiện cho sự thừa nhận của bạn về những thay đổi và thỏa thuận đó bị ràng buộc bởi các điều khoản và điều kiện của những thay đổi đó. Giải quyết tranh chấp. Xin vui lòng đọc Thỏa thuận trọng tài này một cách cẩn thận. Đây là một phần trong hợp đồng của bạn với Công ty và ảnh hưởng đến quyền lợi của bạn. Nó chứa các thủ tục để SỰ BẮT BUỘC TUÂN THEO TRỌNG TÀI VÀ SỰ TỪ CHỐI VỚI MỘT VỤ KIỆN NHÓM.`,
      p2_strong: `Khả năng áp dụng của Thỏa thuận trọng tài.`,
      p2_main: ` Tất cả các khiếu nại và tranh chấp liên quan đến Điều khoản hoặc việc sử dụng bất kỳ sản phẩm hoặc dịch vụ nào do Công ty cung cấp không thể giải quyết một cách không chính thức hoặc tại tòa án xử các vụ kiện nhỏ sẽ được giải quyết bằng trọng tài ràng buộc trên cơ sở cá nhân theo các điều khoản của Thỏa thuận Trọng tài này. Trừ khi có thỏa thuận khác, tất cả các thủ tục tố tụng trọng tài sẽ được tổ chức bằng tiếng Anh. Thỏa thuận trọng tài này áp dụng cho bạn và Công ty, và cho bất kỳ công ty con, chi nhánh, đại lý, nhân viên, bên tiền nhiệm nào quan tâm, bên kế nhiệm và chuyển nhượng, cũng như tất cả người dùng hoặc người thụ hưởng dịch vụ hoặc hàng hóa được ủy quyền theo quy định.`,
      p3_strong: `Yêu cầu thông báo và giải quyết tranh chấp không chính thức.`,
      p3_main: ` Trước khi một trong hai bên có thể tìm kiếm trọng tài, trước tiên, bên đó phải gửi cho bên kia một Thông báo tranh chấp bằng văn bản mô tả bản chất và cơ sở của khiếu nại hoặc tranh chấp, và yêu cầu đền bù. Thông báo cho Công ty phải được gửi tới: ${WEBSITE_ADDRESS_VIE}. Sau khi nhận được Thông báo, bạn và Công ty có thể cố gắng giải quyết khiếu nại hoặc tranh chấp không chính thức. Nếu bạn và Công ty không giải quyết khiếu nại hoặc tranh chấp trong vòng ba mươi (30) ngày sau khi nhận được Thông báo, một trong hai bên có thể bắt đầu tiến hành phân xử trọng tài. Số tiền của bất kỳ đề nghị giải quyết nào được thực hiện bởi bất kỳ bên nào có thể không được tiết lộ cho trọng tài cho đến sau khi trọng tài đã xác định số tiền mà một trong hai bên được hưởng.`,
      p4_strong: `Quy tắc trọng tài.`,
      p4_main: ` Trọng tài sẽ được bắt đầu thông qua Hiệp hội Trọng tài Hoa Kỳ (AAA), một nhà cung cấp giải quyết tranh chấp thay thế được thành lập cung cấp trọng tài như quy định trong phần này. Nếu AAA không có sẵn để phân xử, các bên sẽ đồng ý chọn một Nhà cung cấp ADR thay thế. Các quy tắc của Nhà cung cấp ADR sẽ chi phối tất cả các khía cạnh của trọng tài ngoại trừ trong phạm vi các quy tắc đó mâu thuẫn với Điều khoản. Quy tắc Trọng tài về Người tiêu dùng AAA mà điều chỉnh trọng tài có sẵn trực tuyến tại adr.org hoặc bằng cách gọi cho AAA theo số 1-800-778-7879. Trọng tài sẽ được tiến hành bởi một trọng tài viên trung lập duy nhất. Bất kỳ khiếu nại hoặc tranh chấp nào trong đó tổng số tiền của giải thưởng được tìm kiếm ít hơn Mười nghìn đô la Mỹ (10.000 đô la Mỹ) có thể được giải quyết thông qua ràng buộc trọng tài không dựa trên ngoại hình, theo lựa chọn của bên yêu cầu cứu trợ. Đối với các khiếu nại hoặc tranh chấp trong đó tổng số tiền của giải thưởng được tìm kiếm là Mười nghìn đô la Mỹ (10.000 đô la Mỹ) trở lên, quyền điều trần sẽ được xác định theo Quy tắc trọng tài. Bất kỳ điều trần sẽ được tổ chức tại một địa điểm Trong vòng 100 dặm cư trú của bạn, trừ khi bạn cư trú bên ngoài Hoa Kỳ, và trừ khi các bên có thỏa thuận khác. Nếu bạn cư trú bên ngoài Hoa Kỳ, trọng tài viên sẽ cung cấp cho các bên thông báo hợp lý về ngày, giờ và địa điểm của bất kỳ phiên điều trần bằng miệng nào. Bất kỳ phán quyết nào về phán quyết của trọng tài viên có thể được đưa vào bất kỳ tòa án có thẩm quyền nào. Nếu trọng tài cấp cho bạn một giải thưởng lớn hơn đề nghị giải quyết cuối cùng mà Công ty đã thực hiện cho bạn trước khi bắt đầu phân xử trọng tài, Công ty sẽ trả cho bạn số tiền thưởng lớn hơn hoặc $ 2.500,00. Mỗi bên phải chịu chi phí và khoản giải ngân của mình phát sinh từ trọng tài và sẽ trả một phần bằng nhau về phí và chi phí của Nhà cung cấp ADR.`,
      p5_strong: `Quy tắc bổ sung cho Trọng tài không xuất hiện trực tiếp.`,
      p5_main: ` Nếu trọng tài không xuất hiện trực tiếp được bầu, trọng tài sẽ được tiến hành qua điện thoại, trực tuyến và/hoặc chỉ dựa trên văn bản đệ trình; cách thức cụ thể sẽ được lựa chọn bởi bên khởi xướng trọng tài. Trọng tài sẽ không liên quan đến bất kỳ sự xuất hiện cá nhân nào của các bên hoặc nhân chứng trừ khi các bên có thỏa thuận khác.`,
      p6_strong: `Giới hạn thời gian.`,
      p6_main: ` Nếu bạn hoặc Công ty đeo đuổi trọng tài, hành động trọng tài phải được bắt đầu và/hoặc yêu cầu trong thời hiệu và trong bất kỳ thời hạn nào được áp dụng theo Quy tắc AAA cho khiếu nại thích hợp.`,
      p7_strong: `Thẩm quyền của Trọng tài viên.`,
      p7_main: ` Nếu trọng tài được bắt đầu, trọng tài sẽ quyết định các quyền và trách nhiệm pháp lý của bạn và Công ty, và tranh chấp sẽ không được hợp nhất với bất kỳ vấn đề nào khác hoặc tham gia với bất kỳ trường hợp hoặc bên nào khác. Trọng tài viên sẽ có thẩm quyền cấp các đề nghị bác đơn cho tất cả hoặc một phần của bất kỳ khiếu nại nào. Trọng tài viên sẽ có thẩm quyền bồi thường thiệt hại về tiền tệ và cấp bất kỳ biện pháp khắc phục phi tiền tệ hoặc cứu trợ nào cho một cá nhân theo luật hiện hành, Quy tắc AAA và Điều khoản. Trọng tài sẽ đưa ra một  sự bồi thường bằng văn bản và tuyên bố quyết định mô tả những phát hiện và kết luận thiết yếu mà sự bồi thường dựa trên. Trọng tài có cùng thẩm quyền trao giải thưởng trên cơ sở cá nhân mà một thẩm phán tại tòa án của pháp luật sẽ có. Phán quyết của trọng tài là cuối cùng và ràng buộc với bạn và Công ty.`,
      p8_strong: `Miễn trừ của Hội đồng xét xử.`,
      p8_main: ` CÁC BÊN QUA Đ Y KHƯỚC TỪ NHỮNG QUYỀN HỢP PHÁP VÀ QUYỀN TUYÊN BỐ CỦA HỌ ĐỂ ĐẾN TÒA ÁN VÀ CÓ PHIÊN XỬ TRƯỚC THẨM PHÁN HOẶC BỒI THẨM ĐOÀN, thay vì bầu chọn rằng tất cả các khiếu nại và tranh chấp sẽ được giải quyết bằng trọng tài theo Thỏa thuận Trọng tài này. Thủ tục trọng tài thường hạn chế hơn, hiệu quả hơn và ít tốn kém hơn so với các quy tắc áp dụng tại tòa án và phải chịu rất hạn chế sự xem xét của tòa án. Trong trường hợp bất kỳ vụ kiện nào phát sinh giữa bạn và Công ty tại bất kỳ tòa án tiểu bang hoặc liên bang nào trong vụ kiện rời bỏ trống hoặc thi hành phán quyết trọng tài hoặc ngược lại, BẠN VÀ CÔNG TY KHƯỚC TỪ TẤT CẢ QUYỀN VỚI MỘT PHIÊN TÒA CỦA BỒI THẨM ĐOÀN, thay vào đó, giải quyết tranh chấp bởi một thẩm phán.`,
      p9_strong: `Miễn các hành động nhóm hợp nhất.`,
      p9_main: ` Tất cả các khiếu nại và tranh chấp trong phạm vi của thỏa thuận trọng tài này phải được phân xử hoặc kiện tụng trên cơ sở cá nhân chứ không phải trên cơ sở tập thể, và các khiếu nại của nhiều khách hàng hoặc người dùng không thể được phân xử hoặc kiện tụng chung với bất kỳ khách hàng nào khác hoặc người dùng.`,
      p10_strong: `Bảo mật.`,
      p10_main: ` Tất cả các khía cạnh của thủ tục tố tụng trọng tài sẽ được bảo mật tuyệt đối. Các bên đồng ý duy trì bảo mật trừ khi luật pháp yêu cầu khác. Đoạn văn này sẽ không ngăn cản một bên đệ trình lên tòa án pháp luật bất kỳ thông tin cần thiết nào để thực thi Thỏa thuận này, để thi hành phán quyết trọng tài hoặc tìm kiếm sự giúp đỡ mang tính huấn thị hoặc công bằng.`,
      p11_strong: `Mức độ nghiêm trọng.`,
      p11_main: ` Nếu bất kỳ phần hoặc phần nào của Thỏa thuận Trọng tài này được phát hiện theo luật là không hợp lệ hoặc không thể thi hành bởi tòa án có thẩm quyền, thì những phần hoặc phần cụ thể đó sẽ không có hiệu lực và sẽ bị cắt đứt và phần còn lại của Thỏa thuận sẽ bị cắt đứt và phần còn lại của Thỏa thuận sẽ tiếp tục có  đầy đủ hiệu lực và tác dụng.`,
      p12_strong: `Quyền từ bỏ.`,
      p12_main: ` Bất kỳ hoặc tất cả các quyền và giới hạn được quy định trong Thỏa thuận trọng tài này có thể được từ bỏ bởi bên chống lại bên yêu cầu bồi thường. Việc từ bỏ đó sẽ không từ bỏ hoặc ảnh hưởng đến bất kỳ phần nào khác của Thỏa thuận Trọng tài này.`,
      p13_strong: `Sự tồn tại của Thỏa thuận.`,
      p13_main: ` Thỏa thuận trọng tài này sẽ tiếp tục tồn tại khi chấm dứt mối quan hệ của bạn với Công ty.`,
      p14_strong: `Tòa án xử vụ kiện nhỏ.`,
      p14_main: ` Tuy nhiên, những điều đã nói ở trên, bạn hoặc Công ty có thể đưa ra một hành động cá nhân tại tòa án xử các vụ kiện nhỏ.`,
      p15_strong: `Cứu trợ công bằng khẩn cấp.`,
      p15_main: ` Dẫu cho những điều đã nói ở trên, một trong hai bên có thể tìm kiếm sự cứu trợ công bằng khẩn cấp trước tòa án tiểu bang hoặc liên bang để duy trì tình trạng chờ phân xử trọng tài. Yêu cầu về các biện pháp tạm thời sẽ không được coi là từ bỏ bất kỳ quyền hoặc nghĩa vụ nào khác theo Thỏa thuận Trọng tài này.`,
      p16_strong: `Khiếu nại Không phải chịu Trọng tài.`,
      p16_main: ` Mặc dù đã nêu ở trên, các khiếu nại phỉ báng, vi phạm Đạo luật Lừa đảo và Lạm dụng Máy tính và vi phạm hoặc chiếm dụng bằng sáng chế, bản quyền, nhãn hiệu hoặc bí mật thương mại của bên kia sẽ không phải tuân theo Thỏa thuận Trọng tài này.`,
      p17: `Trong mọi trường hợp mà Thỏa thuận Trọng tài nêu trên cho phép các bên tranh tụng tại tòa án, các bên đồng ý tuân theo thẩm quyền cá nhân của các tòa án nằm trong Hạt Hà Lan, California, cho các mục đích đó.`,
      p18: `Trang web có thể phải tuân theo luật kiểm soát xuất khẩu của Hoa Kỳ và có thể phải tuân theo các quy định xuất khẩu hoặc nhập khẩu ở các quốc gia khác. Bạn đồng ý không xuất, tái xuất hoặc chuyển nhượng, trực tiếp hoặc gián tiếp, bất kỳ dữ liệu kỹ thuật nào của Hoa Kỳ có được từ Công ty hoặc bất kỳ sản phẩm nào sử dụng dữ liệu đó, mà vi phạm luật hoặc quy định xuất khẩu của Hoa Kỳ.`,
      p19: `Công ty được đặt tại địa chỉ trong Mục 10.8. Nếu bạn là cư dân California, bạn có thể báo cáo các khiếu nại cho Đơn vị Hỗ trợ Khiếu nại của Bộ phận Sản phẩm Tiêu dùng của Phòng ban Các Vấn đề Người tiêu dùng California bằng cách liên hệ với họ bằng văn bản tại 400R Street, Sacramento, CA 95814 hoặc qua điện thoại theo số (800) 952-5210.`,
      p20_strong: `Truyền thông điện tử.`,
      p20_main: ` Các liên lạc giữa bạn và Công ty sử dụng các phương tiện điện tử, cho dù bạn sử dụng Trang web hay gửi email cho chúng mình hoặc cho dù Công ty có đăng thông báo trên Trang web hay liên lạc với bạn qua email. Đối với các mục đích hợp đồng, bạn (a) đồng ý nhận thông tin liên lạc từ Công ty dưới dạng điện tử; và (b) đồng ý rằng tất cả các điều khoản và điều kiện, thỏa thuận, thông báo, tiết lộ và thông tin liên lạc khác mà Công ty cung cấp cho bạn đáp ứng về mặt điện tử điện tử bất kỳ nghĩa vụ pháp lý nào mà các thông tin liên lạc đó sẽ đáp ứng nếu được viết bằng bản in.`,
      p21_strong: `Toàn bộ điều khoản.`,
      p21_main: ` Các Điều khoản này cấu thành toàn bộ thỏa thuận giữa bạn và chúng mình về việc sử dụng Trang web. Việc chúng mình không thực hiện hoặc thực thi bất kỳ quyền hoặc quy định nào trong các Điều khoản này sẽ không hoạt động như sự từ bỏ quyền hoặc quy định đó. Các phần tiêu đề trong các Điều khoản này chỉ nhằm mục đích thuận tiện và không có hiệu lực pháp lý hoặc hợp đồng. Từ "bao gồm" có nghĩa là "bao gồm nhưng không giới hạn". Nếu bất kỳ điều khoản nào trong các Điều khoản này được coi là không hợp lệ hoặc không thể thực thi, các điều khoản khác của các Điều khoản này sẽ không thay đổi và điều khoản không hợp lệ hoặc không thể thực thi sẽ được xem xét sửa đổi để nó có hiệu lực và có thể thi hành trong phạm vi tối đa được pháp luật cho phép. Mối quan hệ của bạn với Công ty là của một thầu khoán độc lập và không bên nào là đại lý hoặc đối tác của bên kia. Các Điều khoản này, và các quyền và nghĩa vụ của bạn trong tài liệu này, có thể không được chỉ định, ký hợp đồng phụ, ủy thác hoặc chuyển giao bởi bạn mà không có sự đồng ý trước bằng văn bản của Công ty và mọi chuyển nhượng, hợp đồng phụ, ủy quyền hoặc chuyển nhượng vi phạm đã nói ở trên sẽ không có giá trị. Công ty có thể tự do chuyển nhượng các Điều khoản này. Các điều khoản và điều kiện được quy định trong các Điều khoản này sẽ ràng buộc đối với người được chuyển nhượng.`,
      p22_strong: `Bản quyền / Thông tin nhãn hiệu.`,
      p22_main: ` Bản quyền © 2020 ${WEBSITE_NAME}. Bảo lưu mọi quyền. Tất cả các nhãn hiệu, logo và nhãn hiệu dịch vụ được hiển thị trên Trang web là tài sản của chúng mình hoặc tài sản của các bên thứ ba khác. Bạn không được phép sử dụng các Nhãn hiệu này mà không có sự đồng ý trước bằng văn bản của chúng mình hoặc sự đồng ý của bên thứ ba đó có thể sở hữu Nhãn hiệu đó.`,
    },
    h2_contact: {
      title: "Thông tin liên lạc",
      p1: `Address: ${WEBSITE_ADDRESS_VIE}`,
      p2: `Email: `,
    },
  },

  requests: {

  },
  //SUCCESS
  success_volunteer: {
    title: "Tuyệt vời",
    p1: 'Phản hồi của bạn đã được lưu lại',
    p2: 'Bạn sẽ sớm nhận được những yêu cầu mới',
    btn: 'Quay lại trang chủ'
  },
  success_offer: {
    title: "Tuyệt vời",
    p1: 'Phản hồi của bạn đã được lưu lại',
    p2: 'Bạn sẽ sớm được kết nối với bác sĩ',
    btn: 'Quay lại trang chủ'
  },
  success_request: {
    title: "Tuyệt vời",
    p1: 'Yêu cầu của bạn đã được gửi',
    p2: 'Bạn sẽ sớm nhận được giúp đỡ từ các tình nguyện viên',
    btn: 'Quay lại trang chủ'
  },
};

export default VIE;