new Vue({
  el: '.list',
  data: {
    isActive: 'price',
    isChn: true,
    digits: '',
    result: null,
    numbers: '',
    isShowAdmin: true,
    isShowManual: true,
    isShowPrice: false,
    invoiceList: [],
    priceTitle: '統一發票兌獎',
    adminTitle: '管理者',
    manualTitle: '使用情境',
    adminBtn: '儲存',
    adminPrompt: '請輸入統一發票號碼',
    menuPrice: '兌獎',
    menuAdmin: '管理員',
    menuManual: '說明書',
    pricePrompt: '請輸入統一發票末三碼',
    manualContent: '一經這？銷發政回紅所心資相都人說化燈服什日後著小特邊該節牛事定們示？雖麼自導落在知種覺線，朋小我全媽兩失，交如位今業東不好通景們：裝過星人數父我機生、回成本友事鄉是火於花一位！該長此務不地、子趣答常開醫高終庭他於去。天黨樂獎！線與歷最的動課；我照正間開養技友一，息種料他臺下環業星者口晚營，系玩很還場上車什來。國爾化了不知是後書一教關代？'
  },
  mounted() {
    this.invoiceList = JSON.parse(localStorage.getItem('invoice-number')) || []
    this.isActive = JSON.parse(localStorage.getItem('menu-state')) 
    this.isChn = JSON.parse(localStorage.getItem('chinese-state')) 

    if (this.isActive == 'price') this.showPrice()
    if (this.isActive == 'admin') this.showAdmin()
    if (this.isActive == 'manual') this.showManual()

    this.displayLang()
  },
  methods: {
    switchLang() {
      this.isChn = !this.isChn
      localStorage.setItem('chinese-state', this.isChn)
      this.displayLang()
    },
    displayLang() {
      if (this.isChn) {
        this.adminTitle = '管理者'
        this.priceTitle = '統一發票兌獎'
        this.manualTitle = '使用情境'
        this.adminBtn = '儲存'
        this.adminPrompt = '請輸入統一發票號碼'
        this.menuPrice = '兌獎',
          this.menuAdmin = '管理員',
          this.menuManual = '說明書'
        this.pricePrompt = '請輸入統一發票末三碼'
        this.manualContent = '一經這？銷發政回紅所心資相都人說化燈服什日後著小特邊該節牛事定們示？雖麼自導落在知種覺線，朋小我全媽兩失，交如位今業東不好通景們：裝過星人數父我機生、回成本友事鄉是火於花一位！該長此務不地、子趣答常開醫高終庭他於去。天黨樂獎！線與歷最的動課；我照正間開養技友一，息種料他臺下環業星者口晚營，系玩很還場上車什來。國爾化了不知是後書一教關代？'
      } else {
        this.adminTitle = 'Admin'
        this.priceTitle = 'Invoice Checker'
        this.manualTitle = 'User Manual'
        this.adminBtn = 'Save'
        this.adminPrompt = 'Please enter invoice number'
        this.menuPrice = 'Redeem',
          this.menuAdmin = 'Admin',
          this.menuManual = 'Manual'
        this.pricePrompt = 'Please enter last three digits'
        this.manualContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora ullam optio eligendi molestiae sunt ab quam. Minus quae mollitia quia, explicabo sint impedit, quo at ipsa, exercitationem nemo repellat.'
      }
    },
    save() {
      if (this.numbers === '') {
        Swal.fire({
          icon: 'warning',
          text: '請輸入統一發票八位數字 !'

        })
        return
      }
      this.invoiceList.push(this.numbers)
      localStorage.setItem('invoice-number', JSON.stringify(this.invoiceList))
      this.numbers = ''
    },
    remove(index) {
      Swal.fire({
        title: '確定要刪除這組號碼 ?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '是的, 我要刪除'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            '刪除成功 !',
            '號碼已被刪除',
            'success'
          )
          this.invoiceList.splice(index, 1)
          localStorage.setItem('invoice-number', JSON.stringify(this.invoiceList))
        }
      })
    },
    showPrice() {
      this.isShowPrice = false
      this.isShowAdmin = true
      this.isShowManual = true
      this.isActive = 'price'
      localStorage.setItem('menu-state', JSON.stringify(this.isActive))
    },
    showAdmin() {
      this.isShowAdmin = false
      this.isShowManual = true
      this.isShowPrice = true
      this.isActive = 'admin'
      localStorage.setItem('menu-state', JSON.stringify(this.isActive))
    },
    showManual() {
      this.isShowManual = false
      this.isShowAdmin = true
      this.isShowPrice = true
      this.isActive = 'manual'
      localStorage.setItem('menu-state', JSON.stringify(this.isActive))
    }
  }
})