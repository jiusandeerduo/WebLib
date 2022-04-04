module.exports = {
	PID: 'A00', //少年宫

	NAV_COLOR: '#000000',
	NAV_BG: '#FFBA07',

	MEET_NAME: '活动', 
 
	MENU_ITEM: ['首页', '活动日历', '我的'], // 第1,4,5菜单

	NEWS_CATE: '1=小喇叭,2=机构简介,3=师资展示,4=缤纷社团,5=活动演出,6=家长频道,7=教学研究,8=课程培训',
	MEET_TYPE: '1=活动预约',

	DEFAULT_FORMS: [{
			type: 'line',
			title: '姓名',
			desc: '请填写您的姓名',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		},
		{
			type: 'line',
			title: '手机',
			desc: '请填写您的手机号码',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		}
	]
}