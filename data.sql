USE [LandOfAHP2]
GO
/****** Object:  Table [dbo].[Criteria]    Script Date: 5/31/2023 10:19:33 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Criteria](
	[CriteriaId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[CriteriaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Land]    Script Date: 5/31/2023 10:19:33 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Land](
	[LandId] [int] IDENTITY(1,1) NOT NULL,
	[Area] [nvarchar](100) NULL,
	[Price] [nvarchar](100) NULL,
	[Location] [nvarchar](100) NULL,
	[Users] [nvarchar](100) NULL,
	[Phone] [nvarchar](20) NULL,
	[Name] [nvarchar](100) NULL,
	[UpdatedDate] [datetime] NULL,
	[ImageUrl] [nvarchar](200) NULL,
	[Link] [nvarchar](200) NULL,
PRIMARY KEY CLUSTERED 
(
	[LandId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LandCriteria]    Script Date: 5/31/2023 10:19:33 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LandCriteria](
	[LandCriteriaId] [int] IDENTITY(1,1) NOT NULL,
	[LandId] [int] NULL,
	[CriteriaId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[LandCriteriaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Criteria] ON 

INSERT [dbo].[Criteria] ([CriteriaId], [Name]) VALUES (1, N'Giá cao hơn 2 tỷ')
INSERT [dbo].[Criteria] ([CriteriaId], [Name]) VALUES (2, N'Diện tích lớn hơn 200m²')
INSERT [dbo].[Criteria] ([CriteriaId], [Name]) VALUES (3, N'Giá nhỏ hơn 2 tỷ')
INSERT [dbo].[Criteria] ([CriteriaId], [Name]) VALUES (4, N'Diện tích nhỏ hơn 200m²')
INSERT [dbo].[Criteria] ([CriteriaId], [Name]) VALUES (5, N'Gần đường lớn')
INSERT [dbo].[Criteria] ([CriteriaId], [Name]) VALUES (6, N'Gần trung tâm')
INSERT [dbo].[Criteria] ([CriteriaId], [Name]) VALUES (7, N'Đất bằng phẳng')
INSERT [dbo].[Criteria] ([CriteriaId], [Name]) VALUES (8, N'Khí hậu tốt')
INSERT [dbo].[Criteria] ([CriteriaId], [Name]) VALUES (9, N'Gần khu dân cư')
INSERT [dbo].[Criteria] ([CriteriaId], [Name]) VALUES (10, N'Gần khu du lịch')
INSERT [dbo].[Criteria] ([CriteriaId], [Name]) VALUES (11, N'Gần sông')
INSERT [dbo].[Criteria] ([CriteriaId], [Name]) VALUES (12, N'Gần biển')
SET IDENTITY_INSERT [dbo].[Criteria] OFF
GO
SET IDENTITY_INSERT [dbo].[Land] ON 

INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (5, N'200 m²', N'71500000000', N'Quận 2 - Hồ Chí Minh', N'Trần Quốc Dũng', N'0938055309', N'Chính chủ bán đất An Phú An Khánh Q2', CAST(N'2023-07-04T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2022/09/26/20220926100437-2fdf_wm.jpg', N'https://dothi.net/ban-dat-an-phu-an-khanh/chinh-chu-ban-dat-an-phu-an-khanh-q2-pr14273730.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (6, N'340 m²', N'34000000000', N'Quận 2 - Hồ Chí Minh', N'Trần Quốc Dũng', N'0938055309', N'Chủ bán gấp đất Phú Nhuận Sông Giồng Q2 TP. HCM', CAST(N'2023-07-04T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2022/09/26/20220926103008-87ec_wm.jpg', N'https://dothi.net/ban-dat-nen-du-an-duong-than-van-nhiep-phuong-an-phu/chu-ban-gap-dat-phu-nhuan-song-giong-q2-tp-hcm-pr14273782.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (7, N'125 m²', N'11500000000', N'Quận 9 - Hồ Chí Minh,Đặng Thị Dưỡng', N'Đặng Thị Dưỡng', N'0905004399', N'Bán đất nền KDC Hoàng Anh Minh Tuấn Thủ Đức', CAST(N'2023-07-04T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2023/03/17/20230317103908-c595_wm.jpg', N'https://dothi.net/ban-dat-nen-du-an-kdc-hoang-anh-minh-tuan/ban-dat-nen-kdc-hoang-anh-minh-tuan-ben-canh-khu-do-thi-the-global-city-tp-thu-duc-pr14425164.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (8, N'80 m²', N'1300000000', N'Bình Chánh - Hồ Chí Minh', N'Trần Thị Kim Hạnh', N'0944714507', N'BÁN GẤP LÔ ĐẤT 80M2, PHẠM VĂN HAI, FULL THỔ CƯ', CAST(N'2023-07-04T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2023/04/07/20230407101837-0641_wm.jpg', N'https://dothi.net/ban-dat-duong-an-ha-xa-pham-van-hai/ban-gap-lo-dat-80m2-pham-van-hai-full-tho-cu-shr-gia-1-ty-3-pr14446576.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (9, N'32 m²', N'2400000000', N'Bình Chánh - Hồ Chí Minh', N'Lê Hải Hoàn Tuyên', N'0912345678', N'Bán nhà đường Cổ Linh 32m x 4 tầng full nội thất 2.4 tỷ', CAST(N'2023-06-04T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2023/04/06/20230406210829-4389_wm.jpg', N'https://img.dothi.net/crop/170x115/2023/04/06/20230406210829-4389_wm.jpg')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (10, N'243 m²', N'11300000000', N'Hoài Đức - Hà Nội', N'Cao Huấn Villas', N'0989027902', N'CỰC MỀM BIỆT THỰ HỒ NAM AN KHÁNH', CAST(N'2023-06-04T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2023/04/06/20230406210829-4389_wm.jpg', N'https://img.dothi.net/crop/170x115/2023/04/06/20230406210829-4389_wm.jpg')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (11, N'32 m²', N'2320000000', N'Hà Đông - Hà Nội', N'Trần Thị Kim Hạnh', N'0938055309', N'Bán GẤP nhà Phố Xốm, Phú Lãm, Quận Hà Đông, 32m2, 2,32 tỷ', CAST(N'2023-06-04T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2023/04/06/20230406210829-4389_wm.jpg', N'https://img.dothi.net/crop/170x115/2023/04/06/20230406210829-4389_wm.jpg')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (12, N'129.3 m²', N'5850000000', N'Tân Bình - Hồ Chí Minh', N'Lê Hải Hoàn Tuyên', N'0938055309', N'Đất thổ cư 5x25,86m hẻm xe tải thông 1 trục Huỳnh Văn Nghệ', CAST(N'2023-06-04T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2023/04/06/20230406210829-4389_wm.jpg', N'https://img.dothi.net/crop/170x115/2023/04/06/20230406210829-4389_wm.jpg')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (13, N'47 m²', N'8800000000', N'Cầu Giấy - Hà Nội', N'Nguyễn Hữu Nghiệp', N'0938055309', N'Bán nhà phố Cầu Giấy diện tích 47m2, 7 tầng giá 8.8 tỷ', CAST(N'2023-06-04T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2023/04/06/20230406210829-4389_wm.jpg', N'https://dothi.net/ban-nha-biet-thu-lien-ke-sunshine-city/ban-biet-thu-lien-ke-sunshine-city-ciputra-ha-noi-150m2-4-tang-1-ham-hiem-co-pr14424469.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (14, N'1000 m²', N'12000000000', N'Biên Hòa - Đồng Nai', N'Danh', N'0989027902', N'HOT Bán Biệt thự Phường An Hòa Biên Hòa 1000m2 giá 12 tỷ', CAST(N'2023-06-04T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2023/04/06/20230406210829-4389_wm.jpg', N'https://dothi.net/ban-nha-biet-thu-lien-ke-phuong-an-hoa/hot-ban-biet-thu-phuong-an-hoa-bien-hoa-1000m2-gia-giam-sau-tu-18-ty-giam-con-12-ty-pr14446172.htm')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (15, N'125 m²', N'2320000000', N'Quận 7 - Hồ Chí Minh', N'Nguyễn Hữu Nghiệp', N'0915407138', N'Bán GẤP nhà Phố Xốm, Phú Lãm, Quận Hà Đông, 32m2, 2,32 tỷ', CAST(N'2023-04-07T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2023/02/20/20230220215822-be36_wm.jpg', N'https://dothi.net/ban-nha-biet-thu-lien-ke-xa-an-khanh-4/cuc-mem-biet-thu-ho-nam-an-khanh-gan-vin-thang-long-bac-an-khanh-can-ban-trong-tuan-pr14446473.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (16, N'32 m²', N'2400000000', N'Long Biên - Hà Nội', N'Lê Hải Hoàn Tuyên', N'0963868670', N'Bán nhà đường Cổ Linh 32m x 4 tầng full nội thất 2.4 tỷ', CAST(N'2023-04-07T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2021/12/08/20211208091204-a5c4_wm.jpg', N'https://dothi.net/ban-nha-rieng-phuong-thach-ban-1/ban-nha-duong-co-linh-32m-x-4-tang-full-noi-that-o-to-45-cho-do-24-ty-pr13907400.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (17, N'243 m²', N'11300000000', N'Hoài Đức - Hà Nội', N'Cao Huấn Villas', N'0936461318', N'CỰC MỀM BIỆT THỰ HỒ NAM AN KHÁNH', CAST(N'2023-04-07T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2023/04/07/20230407091204-57b5_wm.jpg', N'https://dothi.net/ban-nha-biet-thu-lien-ke-xa-an-khanh-4/cuc-mem-biet-thu-ho-nam-an-khanh-gan-vin-thang-long-bac-an-khanh-can-ban-trong-tuan-pr14446473.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (18, N'32 m²', N'2320000000', N'Hà Đông - Hà Nội', N'Nguyễn Hữu Nghiệp', N'0915407138', N'Bán GẤP nhà Phố Xốm, Phú Lãm, Quận Hà Đông, 32m2, 2,32 tỷ', CAST(N'2023-04-07T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2023/02/20/20230220215822-be36_wm.jpg', N'https://dothi.net/ban-nha-rieng-duong-quang-lam-phuong-phu-lam-1/ban-gap-nha-pho-xom-phu-lam-quan-ha-dong-32m2-232-ty-pr14404049.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (19, N'129.3 m²', N'5850000000', N'Tân Bình - Hồ Chí Minh', N'Nguyễn Hoàng Nam', N'0933976265', N'Đất thổ cư 5x25,86m hẻm xe tải thông 1 trục Huỳnh Văn Nghệ', CAST(N'2023-04-07T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2022/05/21/20220521171044-f487_wm.jpg', N'https://dothi.net/ban-dat-duong-huynh-van-nghe-phuong-15-8/dat-tho-cu-5x2586m-hem-xe-tai-thong-1-truc-huynh-van-nghe-pr14439581.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (20, N'47.0 m²', N'8800000000', N'Cầu Giấy - Hà Nội', N'Nguyễn Hà Thu', N'0862443855', N'Bán nhà phố Cầu Giấy, kinh doanh, thang máy, diện tích 47m2', CAST(N'2023-04-06T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2023/03/23/20230323224947-009a_wm.jpg', N'https://dothi.net/ban-nha-rieng-duong-cau-giay-phuong-quan-hoa/ban-nha-pho-cau-giay-kinh-doanh-thang-may-dien-tich-47m2-7-tang-mat-tien-37m-gia-88-ty-pr14432342.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (21, N'1000.0 m²', N'12000000000', N'Biên Hòa - Đồng Nai', N'Danh', N'0989027902', N'HOT Bán Biệt thự Phường An Hòa Biên Hòa 1000m2 giá 12 tỷ', CAST(N'2023-04-06T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2023/04/06/20230406210829-4389_wm.jpg', N'https://dothi.net/ban-nha-biet-thu-lien-ke-phuong-an-hoa/hot-ban-biet-thu-phuong-an-hoa-bien-hoa-1000m2-gia-giam-sau-tu-18-ty-giam-con-12-ty-pr14446172.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (22, N'76.0 m²', N'5500000000', N'Tân Bình - Hồ Chí Minh', N'Vũ Bích Hương', N'0904640860', N'Bán gấp nhà hẻm xe tải 118 Trần Văn Quang, dt 76 m2 x 2 tầng', CAST(N'2023-04-06T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2023/04/06/20230406181313-e738_wm.jpg', N'https://dothi.net/ban-nha-rieng-duong-tran-van-quang-phuong-10-10/ban-gap-nha-hem-xe-tai-118-tran-van-quang-dt-76-m2-x-2-tang-chi-nhinh-5-ty-pr14446098.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (23, N'39.0 m²', N'1850000000', N'Quận 7 - Hồ Chí Minh', N'Trân Nguyễn', N'0909802822', N'Chính chủ bán SUNRISE CITYVIEW Q7,1PN-1WC giá 1.85 tỷ', CAST(N'2023-04-06T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2023/04/06/20230406165730-b9b5_wm.jpg', N'https://dothi.net/ban-can-ho-chung-cu-sunrise-city-view/chinh-chu-ban-sunrise-cityview-q71pn1wc-gia-185-ty-full-noi-thatgap-tran-0909802822-pr14446050.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (24, N'150.0 m²', N'36000000000', N'Bắc Từ Liêm - Hà Nội', N'Đình Hiếu', N'0936668656', N'Bán biệt thự liền kề Sunshine City Ciputra Hà Nội 150m2', CAST(N'2023-04-06T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2023/03/16/20230316160134-02f2_wm.jpg', N'https://dothi.net/ban-nha-biet-thu-lien-ke-sunshine-city/ban-biet-thu-lien-ke-sunshine-city-ciputra-ha-noi-150m2-4-tang-1-ham-hiem-co-pr14424469.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (25, N'1112.0 m²', N'7784000000', N'Phúc Thọ - Hà Nội', N'Nguyễn Việt Hưng', N'0983991272', N'Chính chủ nhờ bán nhanh một số lô đất dự án Cẩm Đình', CAST(N'2023-04-06T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2020/05/16/20200516141416-929e_wm.jpg', N'https://dothi.net/ban-dat-nen-du-an-khu-biet-thu-sinh-thai-cam-dinh/chinh-chu-nho-ban-nhanh-mot-so-lo-dat-du-an-cam-dinh-phuc-tho-ha-noi-pr13181010.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (26, N'15 m²', N'34500000000', N'Tây Hồ - Hà Nội', N'Đình Hiếu', N'0936668656', N'Bán biệt thự liền kề Sunshine Riverside', CAST(N'2023-04-06T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2023/02/27/20230227102459-01ff_wm.jpg', N'https://dothi.net/ban-nha-biet-thu-lien-ke-sunshine-riverside/ban-biet-thu-lien-ke-sunshine-riverside-so-do-trao-tay-dau-tu-lai-ngay-pr14408906.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (27, N'16 m²', N'165100000000', N'Tây Hồ - Hà Nội', N'Đình Hiếu', N'0936668656', N'Chính chủ gửi bán biệt thự Quảng An siêu vip mặt Hồ Tây', CAST(N'2023-04-06T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2021/05/28/20210528170924-c445_wm.jpg', N'https://dothi.net/ban-nha-biet-thu-lien-ke-duong-quang-an-phuong-quang-an-2/chinh-chu-gui-ban-biet-thu-quang-an-sieu-vip-mat-ho-tay-pr13665281.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (28, N'17 m²', N'50055000000', N'Bắc Từ Liêm - Hà Nội', N'Đình Hiếu', N'0936668656', N'Chủ nhà cần tiền bán gấp biệt thự liền kề Sunshine City Ciputra', CAST(N'2023-04-06T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2019/08/21/20190821084752-b253_wm.jpg', N'https://dothi.net/ban-nha-biet-thu-lien-ke-sunshine-city/chu-nha-can-tien-ban-gap-biet-thu-lien-ke-sunshine-city-ciputra-co-hoi-hiem-co-pr12822359.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (29, N'18 m²', N'15800000000', N'Tây Hồ - Hà Nội', N'Đình Hiếu', N'0936668656', N'Bán liền kề shophouse Ciputra Hà Nội, vị trí đẹp giá 230 triệu/m2', CAST(N'2023-04-06T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2023/02/03/20230203164653-c09b_wm.jpg', N'https://dothi.net/ban-nha-biet-thu-lien-ke-khu-do-thi-nam-thang-long-ciputra/ban-lien-ke-shophouse-ciputra-ha-noi-vi-tri-dep-gia-230-trieum2-pr13131107.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (30, N'650 m²', N'3200000000', N'Củ Chi - Hồ Chí Minh', N'Nguyễn Thanh Trà', N'0916920550', N'Chính chủ cần bán lỗ miếng đất 650m² Tân Phú Trung Củ Chi', CAST(N'2023-04-06T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2023/04/06/20230406154223-3ca7_wm.jpg', N'https://dothi.net/ban-dat-xa-tan-phu-trung/chinh-chu-can-ban-lo-mieng-dat-650m-tan-phu-trung-cu-chi-pr14446013.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (31, N'1000 m²', N'4500000000', N'Phúc Thọ - Hà Nội', N'Đình Hiếu', N'0936668656', N'Bán một số lô đất biệt thự sinh thái Cẩm Đình Hiệp Thuận', CAST(N'2023-04-06T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2022/05/21/20220521171044-f487_wm.jpg', N'https://dothi.net/ban-dat-nen-du-an-khu-biet-thu-sinh-thai-cam-dinh/ban-mot-so-lo-dat-biet-thu-sinh-thai-cam-dinh-hiep-thuan-sunshine-heritage-resort-hiem-co-gia-tot-pr13089441.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (32, N'122 m²', N'870000000', N'Đức Hòa - Long An', N'MẠNH PHÁT', N'0901006245', N'Bán gấp 5x24.5m, 122m2 thổ, Hựu Thạnh', CAST(N'2023-04-08T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2022/05/21/20220521171044-f487_wm.jpg', N'https://dothi.net/ban-dat-duong-tinh-lo-824-xa-huu-thanh/ban-gap-5x245m-122m2-tho-huu-thanh-doi-dien-kcn-tan-duc-gia-870-trieu-so-rieng-duong-xe-hoi-pr14095321.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (33, N'114.3 m²', N'6858000000', N'Bắc Từ Liêm - Hà Nội', N'Nguyễn Việt Hưng', N'0983991272', N'Bán căn hộ chung cư toà N03 - T2 khu Ngoại Giao Đoàn', CAST(N'2023-04-08T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2023/04/01/20230401104719-3709_wm.jpg', N'https://dothi.net/ban-can-ho-chung-cu-khu-ngoai-giao-doan/ban-can-ho-chung-cu-toa-n03-t2-khu-ngoai-giao-doan-bac-tu-liem-ha-noi-pr13294418.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (34, N'60 m²', N'4200000000', N'Bình Tân - Hồ Chí Minh', N'Nguyễn Hoàng Lam', N'0963630494', N'Bán nhà chính chủ (4m x 15m)', CAST(N'2023-04-08T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2023/04/08/20230408105433-045c_wm.jpg', N'https://dothi.net/ban-nha-rieng-duong-so-6-phuong-binh-tri-dong-b/ban-nha-chinh-chu-4m-x-15m-hem-1-duong-so-6-phuong-btdb-pr14447570.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (35, N'69 m²', N'1750000000', N'Bình Chánh - Hồ Chí Minh', N'Phùng Duy Dũng', N'0909342356', N'Bán gấp căn hộ cao cấp Terra Rosa Khang Nam KDC 13E', CAST(N'2023-04-08T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2022/09/07/20220907150957-ee16_wm.jpg', N'https://dothi.net/ban-can-ho-chung-cu-terra-rosa/ban-gap-can-ho-cao-cap-terra-rosa-khang-nam-kdc-13e-gia-re-pr14248733.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (36, N'200 m²', N'8000000000', N'Bình Chánh - Hồ Chí Minh', N'Phùng Duy Dũng', N'0909342356', N'Bán đất biệt thự dự án KDC Làng Việt Kiều Phong Phú 13E', CAST(N'2023-04-08T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2022/03/16/20220316102528-f230_wm.jpg', N'https://dothi.net/ban-dat-nen-du-an-kdc-lang-viet-kieu-phong-phu-13e/ban-dat-biet-thu-du-an-kdc-lang-viet-kieu-phong-phu-13e-duong-nguyen-van-linh-gia-re-pr13182686.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (37, N'276 m²', N'150000000000', N'Sơn Trà - Đà Nẵng', N'Lê Minh', N'0905299337', N'Bán khách sạn 4* 16 tầng Mặt tiền', CAST(N'2023-04-08T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2023/04/08/20230408094713-78be_wm.jpeg', N'https://dothi.net/ban-nha-mat-pho-duong-vo-van-kiet-phuong-phuoc-my/ban-khach-san-4-16-tang-mat-tien-duong-vo-van-kiet-quan-son-tra-tp-da-nang-pr14447507.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (38, N'42 m²', N'1200000000', N'Thuận An - Bình Dương', N'Tấn Phát', N'0948512784', N'Trả trước chỉ từ 99tr sở hữu căn hộ tầm trung - Chất lượng tầm khủng', CAST(N'2023-04-08T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2023/04/01/20230401093446-15a2_wm.jpg', N'https://dothi.net/ban-can-ho-chung-cu-can-ho-legacy-prime/tra-truoc-chi-tu-99tr-so-huu-can-ho-tam-trung-chat-luong-tam-khung-pr14440746.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (39, N'80 m²', N'16000000000', N'Ba Đình - Hà Nội', N'Khánh Hùng', N'0902298826', N'Bán nhà riêng phố Văn Cao - Ba Đình, ngõ ô tô', CAST(N'2023-04-08T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2022/09/23/20220923154708-5469_wm.jpg', N'https://dothi.net/ban-nha-rieng-duong-van-cao-phuong-lieu-giai/ban-nha-rieng-pho-van-cao-ba-dinh-ngo-o-to-dien-tich-80m2-x-5-tang-gia-16-ty-0902298826-pr14271101.html')
INSERT [dbo].[Land] ([LandId], [Area], [Price], [Location], [Users], [Phone], [Name], [UpdatedDate], [ImageUrl], [Link]) VALUES (40, N'61.5 m²', N'1950000000', N'Vũng Tàu - Bà Rịa Vũng Tàu', N'Nguyễn Như Sương', N'0933923442', N'Cần bán gấp căn 1PN - 61.5m2, view nội khu, full nội thất', CAST(N'2023-04-08T00:00:00.000' AS DateTime), N'https://img.dothi.net/crop/170x115/2023/04/08/20230408085431-37df_wm.jpg', N'https://dothi.net/ban-can-ho-chung-cu-gateway-vung-tau/can-ban-gap-can-1pn-615m2-view-noi-khu-full-noi-that-gia-chi-1ty95-bot-loc-lh-0973-563-12-pr14447439.html')
SET IDENTITY_INSERT [dbo].[Land] OFF
GO
SET IDENTITY_INSERT [dbo].[LandCriteria] ON 

INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (3, 5, 1)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (4, 6, 1)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (5, 7, 4)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (6, 8, 4)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (7, 7, 9)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (8, 6, 11)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (9, 5, 1)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (10, 6, 2)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (11, 9, 1)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (12, 10, 2)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (13, 11, 1)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (14, 12, 1)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (15, 13, 4)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (16, 14, 10)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (17, 10, 1)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (18, 11, 4)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (19, 13, 1)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (20, 14, 1)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (21, 8, 3)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (22, 32, 7)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (23, 9, 4)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (24, 10, 6)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (25, 11, 6)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (26, 12, 4)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (27, 13, 5)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (28, 14, 2)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (29, 14, 6)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (30, 14, 8)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (31, 16, 1)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (32, 17, 1)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (33, 19, 6)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (34, 19, 1)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (35, 18, 1)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (36, 20, 1)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (37, 21, 2)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (38, 22, 1)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (39, 23, 4)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (40, 24, 4)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (41, 25, 1)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (42, 30, 2)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (43, 27, 8)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (44, 26, 6)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (45, 28, 3)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (46, 29, 7)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (47, 40, 9)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (48, 30, 2)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (49, 31, 9)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (50, 32, 11)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (51, 35, 10)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (52, 33, 2)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (53, 34, 5)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (54, 36, 11)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (55, 39, 8)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (56, 38, 11)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (57, 37, 7)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (58, 27, 5)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (59, 15, 4)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (60, 15, 1)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (61, 15, 6)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (62, 16, 4)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (63, 16, 5)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (64, 17, 4)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (65, 17, 11)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (66, 18, 4)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (67, 19, 4)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (68, 19, 5)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (69, 19, 7)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (70, 20, 4)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (71, 20, 5)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (72, 21, 1)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (73, 21, 9)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (74, 22, 4)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (75, 22, 7)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (76, 23, 3)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (77, 23, 8)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (78, 24, 1)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (79, 24, 9)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (80, 24, 8)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (81, 25, 2)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (82, 25, 7)
INSERT [dbo].[LandCriteria] ([LandCriteriaId], [LandId], [CriteriaId]) VALUES (83, 40, 12)
SET IDENTITY_INSERT [dbo].[LandCriteria] OFF
GO
ALTER TABLE [dbo].[LandCriteria]  WITH CHECK ADD FOREIGN KEY([CriteriaId])
REFERENCES [dbo].[Criteria] ([CriteriaId])
GO
ALTER TABLE [dbo].[LandCriteria]  WITH CHECK ADD FOREIGN KEY([LandId])
REFERENCES [dbo].[Land] ([LandId])
GO
