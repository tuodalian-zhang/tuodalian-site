/* ===========================
   上海拓达联国际贸易有限公司
   官方网站 — 中英文切换 (i18n)
   =========================== */

(function() {
  'use strict';

  // ========== 翻译字典 ==========
  var t = {
    // ---- 导航 ----
    'nav.home':         { zh: '首页',       en: 'Home' },
    'nav.about':        { zh: '关于我们',   en: 'About Us' },
    'nav.trade':        { zh: '国际贸易',   en: 'Trade' },
    'nav.supplychain':  { zh: '供应链管理', en: 'Supply Chain' },
    'nav.products':     { zh: '产品服务',   en: 'Products' },
    'nav.news':         { zh: '新闻资讯',   en: 'News' },
    'nav.contact':      { zh: '联系我们',   en: 'Contact' },

    // ---- Hero ----
    'hero.badge':     { zh: 'SINCE 2015 · 立足上海 连接全球',   en: 'SINCE 2015 · Based in Shanghai, Connecting Globally' },
    'hero.title1':    { zh: '全球贸易<span class="gold">解决方案</span>', en: 'Global Trade <span class="gold">Solutions</span>' },
    'hero.title2':    { zh: '值得信赖的<span class="gold">国际合作伙伴</span>', en: 'Your Trusted <span class="gold">International Partner</span>' },
    'hero.desc':      { zh: '上海拓达联国际贸易有限公司深耕国际贸易与供应链管理领域，为客户提供进出口代理、跨境物流、仓储配送、贸易咨询等一站式专业服务，助力企业扬帆出海，链接全球市场。', en: 'Shanghai Tuodalian International Trade Co., Ltd. specializes in international trade and supply chain management, providing one-stop professional services including import/export agency, cross-border logistics, warehousing & distribution, and trade consulting to help enterprises expand globally.' },
    'hero.cta1':      { zh: '立即咨询',     en: 'Get a Quote' },
    'hero.cta2':      { zh: '了解更多',     en: 'Learn More' },
    'hero.stat1':     { zh: '覆盖国家/地区', en: 'Countries Covered' },
    'hero.stat2':     { zh: '合作企业',     en: 'Partner Enterprises' },
    'hero.stat3':     { zh: '服务品类 SKU', en: 'Service Categories' },
    'hero.stat4':     { zh: '客户满意度',   en: 'Client Satisfaction' },

    // ---- 核心优势 ----
    'adv.tag':     { zh: '为什么选择我们', en: 'Why Choose Us' },
    'adv.title':   { zh: '核心<span class="gold">优势</span>', en: 'Core <span class="gold">Advantages</span>' },
    'adv.desc':    { zh: '以专业铸就信任，以服务创造价值', en: 'Building Trust Through Expertise, Creating Value Through Service' },
    'adv1.title':  { zh: '资质齐全',   en: 'Full Qualifications' },
    'adv1.desc':   { zh: '具备进出口经营权、海关备案、检验检疫备案等全套资质，合规经营让您无忧合作。', en: 'Fully licensed with import/export operation rights, customs registration, inspection & quarantine permits — compliant operations for worry-free cooperation.' },
    'adv2.title':  { zh: '专业团队',   en: 'Expert Team' },
    'adv2.desc':   { zh: '拥有经验丰富的国际贸易专家团队，精通海关法规、国际结算、信用证操作等专业领域。', en: 'Experienced international trade specialists proficient in customs regulations, international settlement, letter of credit operations and more.' },
    'adv3.title':  { zh: '全球网络',   en: 'Global Network' },
    'adv3.desc':   { zh: '覆盖50多个国家和地区的供应链网络，与全球主要港口、航运公司和仓储企业深度合作。', en: 'Supply chain network spanning 50+ countries, with deep partnerships across major ports, shipping companies and warehousing enterprises worldwide.' },
    'adv4.title':  { zh: '一站式服务', en: 'One-Stop Service' },
    'adv4.desc':   { zh: '从采购寻源、质量管控到国际物流、清关配送，全链路一站式解决您的贸易需求。', en: 'From sourcing and quality control to international logistics and customs clearance — a complete end-to-end solution for your trade needs.' },

    // ---- 关于我们 ----
    'about.tag':       { zh: '关于我们',   en: 'About Us' },
    'about.title':     { zh: '上海拓达联<span class="gold">国际贸易有限公司</span>', en: 'Shanghai Tuodalian <span class="gold">International Trade Co., Ltd.</span>' },
    'about.lead':      { zh: '上海拓达联国际贸易有限公司（Shanghai Tuodalian International Trade Co., Ltd.）是经上海市市场监督管理局批准成立的专业国际贸易企业，坐落于中国经济的桥头堡——上海。', en: 'Shanghai Tuodalian International Trade Co., Ltd. is a professional international trade enterprise approved by the Shanghai Municipal Administration for Market Regulation, strategically located in Shanghai — the economic gateway of China.' },
    'about.text1':     { zh: '公司秉承"诚信为本、合作共赢"的经营理念，致力于为全球客户提供高品质的国际贸易与供应链管理服务。业务范围涵盖技术进出口、货物进出口代理、国内贸易代理、货运代理、仓储物流、跨境电商等全链条服务。', en: 'Guided by the philosophy of "integrity first, win-win cooperation", we are committed to delivering high-quality international trade and supply chain management services. Our scope covers technology import/export, cargo import/export agency, domestic trade agency, freight forwarding, warehousing & logistics, and cross-border e-commerce.' },
    'about.text2':     { zh: '我们拥有丰富的行业经验和专业的服务团队，经营品类覆盖服装鞋帽、电子产品、珠宝首饰、化工产品、农产品、针纺织品、皮革制品、日用消费品等多个领域。依托上海自贸区的政策优势和港口便利，我们能够为客户提供高效、安全、合规的全球贸易解决方案。', en: 'With extensive industry experience and a professional service team, we cover categories including apparel & footwear, electronics, jewelry, chemicals, agricultural products, textiles, leather goods, and consumer goods. Leveraging the policy advantages of Shanghai Free Trade Zone and port convenience, we deliver efficient, secure, and compliant global trade solutions.' },
    'about.f1':        { zh: '合法合规经营，资质齐全',   en: 'Full Legal Compliance & Qualifications' },
    'about.f2':        { zh: '专业清关团队，通关效率高', en: 'Professional Customs Clearance Team' },
    'about.f3':        { zh: '全球物流网络，配送及时可靠', en: 'Global Logistics Network, Reliable Delivery' },
    'about.f4':        { zh: '一对一专属客户经理服务', en: 'Dedicated One-on-One Account Manager' },
    'about.badge':     { zh: '创立至今',   en: 'Established' },
    'about.exp.label': { zh: '服务覆盖',   en: 'Coverage' },
    'about.exp.unit':  { zh: '国家和地区', en: 'Countries & Regions' },

    // ---- 国际贸易 ----
    'trade.tag':     { zh: '核心业务',     en: 'Core Services' },
    'trade.title':   { zh: '国际<span class="gold">贸易服务</span>', en: 'International <span class="gold">Trade Services</span>' },
    'trade.desc':    { zh: '全方位进出口解决方案，助力企业拓展全球市场', en: 'Comprehensive import/export solutions to help businesses expand globally' },
    'trade1.title':  { zh: '进出口代理',   en: 'Import & Export Agency' },
    'trade1.desc':   { zh: '提供一站式进出口代理服务，涵盖报关、报检、外汇结算、退税等全流程操作，确保合规高效。', en: 'One-stop import/export agency services covering customs declaration, inspection, foreign exchange settlement, and tax rebates — ensuring compliance and efficiency.' },
    'trade2.title':  { zh: '全球采购',     en: 'Global Sourcing' },
    'trade2.desc':   { zh: '依托全球供应商网络，为客户进行优质货源寻源、供应商审核、价格谈判及质量控制服务。', en: 'Leveraging our global supplier network for quality sourcing, supplier auditing, price negotiation, and quality control services.' },
    'trade3.title':  { zh: '贸易咨询',     en: 'Trade Consulting' },
    'trade3.desc':   { zh: '提供国际贸易政策解读、市场分析、合规咨询、合同审查等专业顾问服务，降低贸易风险。', en: 'Professional advisory services including trade policy analysis, market research, compliance consulting, and contract review to mitigate trade risks.' },
    'trade4.title':  { zh: '跨境电商',     en: 'Cross-Border E-Commerce' },
    'trade4.desc':   { zh: '提供跨境电商平台运营、海外仓储、跨境支付、品牌出海等数字化贸易解决方案。', en: 'Digital trade solutions including cross-border e-commerce platform operations, overseas warehousing, cross-border payments, and global brand expansion.' },
    // trade list items
    'trade1.l1': { zh: '海关报关清关', en: 'Customs Clearance' },
    'trade1.l2': { zh: '商检/动植检代理', en: 'Commodity & Quarantine Inspection' },
    'trade1.l3': { zh: '外汇收付与管理', en: 'FX Settlement & Management' },
    'trade1.l4': { zh: '出口退税代办', en: 'Export Tax Rebate Service' },
    'trade2.l1': { zh: '供应商开发与审核', en: 'Supplier Development & Auditing' },
    'trade2.l2': { zh: '产品比价与成本优化', en: 'Price Comparison & Cost Optimization' },
    'trade2.l3': { zh: '样品确认与质量管控', en: 'Sample Verification & QC' },
    'trade2.l4': { zh: '订单跟踪与交付管理', en: 'Order Tracking & Delivery Mgmt' },
    'trade3.l1': { zh: '国际市场调研分析', en: 'International Market Research' },
    'trade3.l2': { zh: '贸易合规咨询', en: 'Trade Compliance Consulting' },
    'trade3.l3': { zh: '合同审查与谈判', en: 'Contract Review & Negotiation' },
    'trade3.l4': { zh: '关税政策解读', en: 'Tariff Policy Advisory' },
    'trade4.l1': { zh: '平台店铺运营', en: 'Platform Store Operations' },
    'trade4.l2': { zh: '海外仓一件代发', en: 'Overseas Fulfillment' },
    'trade4.l3': { zh: '多币种跨境结算', en: 'Multi-Currency Settlement' },
    'trade4.l4': { zh: '品牌全球推广', en: 'Global Brand Promotion' },

    // ---- 供应链管理 ----
    'sc.tag':      { zh: '核心业务',       en: 'Core Services' },
    'sc.title':    { zh: '供应链<span class="gold">管理服务</span>', en: 'Supply Chain <span class="gold">Management</span>' },
    'sc.desc':     { zh: '整合全链路资源，打造高效、透明、可靠的全球供应链体系', en: 'Integrating end-to-end resources to build an efficient, transparent, and reliable global supply chain' },
    'sc.node1.t':  { zh: '采购寻源',       en: 'Sourcing' },
    'sc.node1.p':  { zh: '供应商筛选与评估', en: 'Supplier Screening & Evaluation' },
    'sc.node2.t':  { zh: '质量管控',       en: 'Quality Control' },
    'sc.node2.p':  { zh: '产品检验与认证', en: 'Product Inspection & Certification' },
    'sc.node3.t':  { zh: '国际物流',       en: 'Intl Logistics' },
    'sc.node3.p':  { zh: '海陆空铁多式联运', en: 'Sea, Air, Land & Rail' },
    'sc.node4.t':  { zh: '仓储配送',       en: 'Warehousing' },
    'sc.node4.p':  { zh: '智能仓储与分拨', en: 'Smart Warehousing & Distribution' },
    'sc.node5.t':  { zh: '清关交付',       en: 'Clearance & Delivery' },
    'sc.node5.p':  { zh: '报关报检与末端配送', en: 'Customs & Last-Mile Delivery' },
    'sc.card1.t':  { zh: '货运代理',       en: 'Freight Forwarding' },
    'sc.card1.p':  { zh: '提供海运、空运、陆运、铁路等多种运输方式的货运代理服务，与全球主要船公司和航空公司保持紧密合作，确保运力充足、舱位保障。', en: 'Freight forwarding services across sea, air, land, and rail — maintaining close partnerships with major global carriers to ensure sufficient capacity and guaranteed space.' },
    'sc.card2.t':  { zh: '仓储物流',       en: 'Warehousing & Logistics' },
    'sc.card2.p':  { zh: '在上海及全国主要港口城市设有合作仓储中心，提供货物暂存、分拣、包装、贴标、配送等一体化仓储物流服务。', en: 'Cooperative warehousing centers in Shanghai and major port cities across China, providing integrated services including temporary storage, sorting, packaging, labeling, and distribution.' },
    'sc.card3.t':  { zh: '通关服务',       en: 'Customs Clearance' },
    'sc.card3.p':  { zh: '专业的报关报检团队，熟悉各国海关法规和流程，提供进出口报关、商品归类、原产地证办理、熏蒸消毒等一站式通关服务。', en: 'Professional customs brokerage team familiar with international regulations, providing one-stop clearance services including import/export declaration, HS classification, certificate of origin, and fumigation.' },
    'sc.card4.t':  { zh: '供应链金融',     en: 'Supply Chain Finance' },
    'sc.card4.p':  { zh: '联合金融机构，为客户提供灵活的供应链融资方案，包括信用证开立、应收账款融资、仓单质押等金融服务。', en: 'Partnering with financial institutions to offer flexible supply chain financing solutions, including L/C issuance, accounts receivable financing, and warehouse receipt pledging.' },

    // ---- 产品服务 ----
    'prod.tag':    { zh: '业务范围',       en: 'Our Scope' },
    'prod.title':  { zh: '产品<span class="gold">与服务品类</span>', en: 'Product <span class="gold">& Service Categories</span>' },
    'prod.desc':   { zh: '多品类覆盖，满足全球客户的多样化贸易需求', en: 'Multi-category coverage to meet diverse global trade demands' },
    'prod1.t': { zh: '服装服饰', en: 'Apparel & Accessories' },
    'prod1.p': { zh: '服装、鞋帽、皮革制品、服装辅料、针纺织品等', en: 'Clothing, footwear, headwear, leather goods, garment accessories, textiles, and more' },
    'prod2.t': { zh: '电子产品', en: 'Electronics' },
    'prod2.p': { zh: '电子产品、互联网设备、人工智能硬件等', en: 'Electronic products, internet devices, AI hardware, and more' },
    'prod3.t': { zh: '珠宝首饰', en: 'Jewelry' },
    'prod3.p': { zh: '珠宝首饰批发与零售，设计精美、品质保证', en: 'Jewelry wholesale and retail — exquisite design, guaranteed quality' },
    'prod4.t': { zh: '化工产品', en: 'Chemical Products' },
    'prod4.p': { zh: '化工原料、食品用洗涤剂、消毒剂、日用化学产品', en: 'Chemical raw materials, food-grade detergents, disinfectants, daily chemical products' },
    'prod5.t': { zh: '农产品', en: 'Agricultural Products' },
    'prod5.p': { zh: '初级农产品收购、食用农产品批发与零售', en: 'Primary agricultural product procurement, edible agricultural product wholesale and retail' },
    'prod6.t': { zh: '日用品', en: 'Consumer Goods' },
    'prod6.p': { zh: '厨具卫具、日用品、消毒剂、模具销售等', en: 'Kitchenware, sanitary ware, daily necessities, disinfectants, molds, and more' },

    // ---- 合作伙伴 ----
    'partner.tag':   { zh: '信任与合作',     en: 'Trust & Partnership' },
    'partner.title': { zh: '合作<span class="gold">伙伴</span>', en: 'Our <span class="gold">Partners</span>' },
    'partner.desc':  { zh: '与全球优秀企业携手并进，共创价值', en: 'Moving forward with outstanding enterprises worldwide, creating value together' },
    'partner1.t': { zh: '亚 太 地 区', en: 'Asia-Pacific' },
    'partner1.p': { zh: '日本、韩国、东南亚各国贸易伙伴', en: 'Trade partners in Japan, Korea, Southeast Asia' },
    'partner2.t': { zh: '欧 洲 地 区', en: 'Europe' },
    'partner2.p': { zh: '德国、法国、英国、意大利等欧洲市场', en: 'European markets including Germany, France, UK, Italy' },
    'partner3.t': { zh: '北 美 地 区', en: 'North America' },
    'partner3.p': { zh: '美国、加拿大、墨西哥贸易网络', en: 'Trade network in the US, Canada, and Mexico' },
    'partner4.t': { zh: '中 东 非 洲', en: 'Middle East & Africa' },
    'partner4.p': { zh: '中东、非洲等新兴市场合作伙伴', en: 'Partners in Middle East, Africa, and emerging markets' },

    // ---- 新闻资讯 ----
    'news.tag':     { zh: '动态资讯',       en: 'Latest Updates' },
    'news.title':   { zh: '新闻<span class="gold">资讯</span>', en: 'News <span class="gold">& Updates</span>' },
    'news.desc':    { zh: '关注行业动态，掌握最新贸易政策与市场趋势', en: 'Stay informed on industry developments, trade policies, and market trends' },
    'news1.cat':    { zh: '公司动态',       en: 'Company News' },
    'news1.title':  { zh: '上海拓达联国际贸易有限公司官网正式上线', en: 'Tuodalian International Trade Official Website Launched' },
    'news1.desc':   { zh: '经过精心筹备，公司官方网站于今日正式上线运行，全面展示公司业务范围与核心优势...', en: 'After careful preparation, the company\'s official website officially launched today, showcasing our full business scope and core advantages...' },
    'news2.cat':    { zh: '行业资讯',       en: 'Industry News' },
    'news2.title':  { zh: 'RCEP协定持续深化，亚太贸易迎来新机遇', en: 'RCEP Deepens, Bringing New Opportunities to Asia-Pacific Trade' },
    'news2.desc':   { zh: '区域全面经济伙伴关系协定（RCEP）实施以来，亚太地区贸易便利化水平显著提升...', en: 'Since the implementation of RCEP, trade facilitation in the Asia-Pacific region has significantly improved...' },
    'news3.cat':    { zh: '政策解读',       en: 'Policy Update' },
    'news3.title':  { zh: '海关总署出台新举措优化口岸营商环境', en: 'China Customs Introduces New Measures to Optimize Port Business Environment' },
    'news3.desc':   { zh: '海关总署近日发布系列便利化措施，进一步简化进出口通关流程，降低企业贸易成本...', en: 'China Customs has recently released a series of facilitation measures to further streamline import/export clearance and reduce trade costs for enterprises...' },
    'news.readmore': { zh: '阅读全文 →',   en: 'Read More →' },

    // ---- 联系我们 ----
    'contact.tag':    { zh: '联系我们',       en: 'Contact Us' },
    'contact.title':  { zh: '即刻<span class="gold">联络</span>', en: 'Get in <span class="gold">Touch</span>' },
    'contact.desc':   { zh: '期待与您合作，共创美好未来', en: 'We look forward to working with you for a brighter future' },
    'contact.addr':   { zh: '公司地址',       en: 'Address' },
    'contact.addrv':  { zh: '上海市浦东新区自由贸易试验区', en: 'Shanghai Pilot Free Trade Zone, Pudong New Area' },
    'contact.phone':   { zh: '联系电话',      en: 'Phone' },
    'contact.email.t': { zh: '电子邮箱',      en: 'Email' },
    'contact.hours.t': { zh: '工作时间',      en: 'Business Hours' },
    'contact.hours.v': { zh: '周一至周五 9:00 - 18:00', en: 'Mon - Fri, 9:00 AM - 6:00 PM' },

    // ---- 表单 ----
    'form.name':       { zh: '您的姓名 *',         en: 'Your Name *' },
    'form.name.placeholder': { zh: '请输入您的姓名',        en: 'Enter your name' },
    'form.company':    { zh: '公司名称',            en: 'Company' },
    'form.company.placeholder': { zh: '请输入您的公司名称', en: 'Enter your company name' },
    'form.email':      { zh: '电子邮箱 *',          en: 'Email *' },
    'form.email.placeholder': { zh: '请输入您的电子邮箱',   en: 'Enter your email' },
    'form.phone':      { zh: '联系电话',            en: 'Phone' },
    'form.phone.placeholder': { zh: '请输入您的联系电话',   en: 'Enter your phone number' },
    'form.service':    { zh: '感兴趣的服务',         en: 'Service Interested In' },
    'form.service.p':  { zh: '请选择您感兴趣的服务',     en: 'Select a service' },
    'form.message':    { zh: '留言内容 *',          en: 'Message *' },
    'form.message.p':  { zh: '请描述您的需求，我们将尽快与您联系...', en: 'Describe your needs and we will contact you shortly...' },
    'form.submit':     { zh: '提交咨询',            en: 'Submit Inquiry' },
    'form.service.o0': { zh: '请选择您感兴趣的服务', en: 'Select a service' },
    'form.service.o1': { zh: '进出口代理',         en: 'Import & Export Agency' },
    'form.service.o2': { zh: '全球采购',           en: 'Global Sourcing' },
    'form.service.o3': { zh: '国际物流',           en: 'International Logistics' },
    'form.service.o4': { zh: '仓储配送',           en: 'Warehousing & Distribution' },
    'form.service.o5': { zh: '贸易咨询',           en: 'Trade Consulting' },
    'form.service.o6': { zh: '跨境电商',           en: 'Cross-Border E-Commerce' },
    'form.service.o7': { zh: '其他服务',           en: 'Other Services' },
    'form.subject':    { zh: '【网站咨询】新客户留言 - 拓达联国际贸易', en: '[Website Inquiry] New Client Message - Tuodalian Trade' },
    'form.autoreply':  { zh: '感谢您的咨询！上海拓达联国际贸易有限公司已收到您的留言，我们将在24小时内与您联系。电话：13363031515', en: 'Thank you for your inquiry! Shanghai Tuodalian International Trade Co., Ltd. has received your message. We will contact you within 24 hours. Tel: +86 13363031515' },

    // ---- Footer ----
    'footer.brand':     { zh: '上海拓达联国际贸易有限公司', en: 'Shanghai Tuodalian International Trade Co., Ltd.' },
    'footer.desc':      { zh: '专业国际贸易与供应链管理服务商，致力于为全球客户提供高效、安全、合规的一站式贸易解决方案。', en: 'Professional international trade and supply chain management provider, committed to delivering efficient, secure, and compliant one-stop trade solutions for global clients.' },
    'footer.nav':       { zh: '快速导航',   en: 'Quick Links' },
    'footer.services':  { zh: '核心服务',   en: 'Core Services' },
    'footer.contact.t': { zh: '联系方式',   en: 'Contact Info' },
    'footer.copy':      { zh: '© 2015-2026 上海拓达联国际贸易有限公司 版权所有', en: '© 2015-2026 Shanghai Tuodalian International Trade Co., Ltd. All Rights Reserved' },
    'footer.icp':       { zh: '沪ICP备2025130866号-1', en: 'ICP License 2025130866-1' },
    'footer.privacy':   { zh: '隐私政策',   en: 'Privacy Policy' },
    'footer.terms':     { zh: '服务条款',   en: 'Terms of Service' },

    // ---- Mobile Bar ----
    'mobile.call':   { zh: '拨打电话',   en: 'Call Us' },
    'mobile.inquiry':{ zh: '在线咨询',   en: 'Inquiry' },

    // ---- Top Bar ----
    'top.email': { zh: 'info@tuodalian.com', en: 'info@tuodalian.com' },

    // ---- Page Meta ----
    'meta.title': { zh: '上海拓达联国际贸易有限公司 | 国际贸易与供应链管理', en: 'Shanghai Tuodalian International Trade | Global Trade & Supply Chain' },
    'meta.desc':  { zh: '上海拓达联国际贸易有限公司 — 专业的国际贸易与供应链管理服务商，提供进出口代理、货物运输、仓储物流、跨境电商等一站式全球贸易解决方案。', en: 'Shanghai Tuodalian International Trade Co., Ltd. — Professional international trade and supply chain services including import/export agency, freight forwarding, warehousing, and cross-border e-commerce.' },
    'meta.keys':  { zh: '国际贸易,供应链管理,进出口代理,货运代理,仓储物流,跨境电商,上海拓达联', en: 'international trade,supply chain,import export,freight forwarder,logistics,cross border ecommerce,Shanghai Tuodalian' },
    'logo.alt':   { zh: '上海拓达联国际贸易有限公司', en: 'Shanghai Tuodalian International Trade Co., Ltd.' },
  };

  // ========== 获取翻译 ==========
  function get(key, lang) {
    var entry = t[key];
    if (!entry) return key;
    return entry[lang] || entry.zh || key;
  }

  // ========== 切换语言 ==========
  function switchLanguage(lang) {
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';

    // 1. 更新 data-i18n 文本
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var keys = el.getAttribute('data-i18n').split(' ');
      for (var j = 0; j < keys.length; j++) {
        var k = keys[j];
        var val = get(k, lang);
        // 如果包含HTML标签则用innerHTML，否则用textContent
        if (val.indexOf('<') !== -1 && val.indexOf('>') !== -1) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    }

    // 2. 更新占位符
    var phs = document.querySelectorAll('[data-i18n-placeholder]');
    for (var pi = 0; pi < phs.length; pi++) {
      phs[pi].setAttribute('placeholder', get(phs[pi].getAttribute('data-i18n-placeholder'), lang));
    }

    // 3. 更新 option 文本
    var opts = document.querySelectorAll('[data-i18n-option]');
    for (var oi = 0; oi < opts.length; oi++) {
      opts[oi].textContent = get(opts[oi].getAttribute('data-i18n-option'), lang);
    }

    // 4. 更新 meta 标签
    document.title = get('meta.title', lang);
    var descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', get('meta.desc', lang));
    var keysMeta = document.querySelector('meta[name="keywords"]');
    if (keysMeta) keysMeta.setAttribute('content', get('meta.keys', lang));

    // 5. 更新表单隐藏字段
    var subjectField = document.querySelector('input[name="_subject"]');
    if (subjectField) subjectField.value = get('form.subject', lang);
    var autorespField = document.querySelector('input[name="_autoresponse"]');
    if (autorespField) autorespField.value = get('form.autoreply', lang);

    // 6. 更新logo的alt
    var logoImg = document.querySelector('.logo-icon img');
    if (logoImg) logoImg.setAttribute('alt', get('logo.alt', lang));

    // 7. 更新语言切换按钮状态
    var langBtns = document.querySelectorAll('#langSwitcher a');
    for (var li = 0; li < langBtns.length; li++) {
      langBtns[li].classList.remove('active-lang');
    }
    if (lang === 'zh') {
      langBtns[0].classList.add('active-lang');
    } else {
      langBtns[1].classList.add('active-lang');
    }

    // 8. 保存到 localStorage
    try { localStorage.setItem('tuodalian-lang', lang); } catch(e) {}
  }

  // ========== 初始化 ==========
  function init() {
    // 升级语言切换器为功能链接
    var topRight = document.querySelector('.top-right');
    if (topRight) {
      topRight.id = 'langSwitcher';
      topRight.innerHTML = '<a href="javascript:void(0)" data-lang="zh">中文</a><span class="sep">|</span><a href="javascript:void(0)" data-lang="en">English</a>';
    }

    // 绑定点击事件
    var switcher = document.getElementById('langSwitcher');
    if (switcher) {
      switcher.addEventListener('click', function(e) {
        var a = e.target.closest('a');
        if (!a) return;
        e.preventDefault();
        var lang = a.getAttribute('data-lang');
        if (lang) switchLanguage(lang);
      });
    }

    // 读取保存的语言
    var savedLang = 'zh';
    try { savedLang = localStorage.getItem('tuodalian-lang') || 'zh'; } catch(e) {}

    switchLanguage(savedLang);
  }

  // DOM加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
