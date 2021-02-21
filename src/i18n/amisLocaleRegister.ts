/**
 * 
 * Amis 用了中文当key，如果自己的项目里，是英文做的key的时候，需要替换内部的国际化资源串。
 * 英文在这个文件直接改。
 * 中文使用覆盖方式。
 */
import {registerLocale} from 'amis';

let amisCn={
  "提交":"更改后的提交"
}

let amisEn = {
    '确认': 'Confirm',
    '取消': 'Cancel',
    'YYYY年': 'YYYY',
    '{{from}}年-{{to}}年': '{{from}} - {{to}}',
    '请选择日期': 'Select Date',
    '请选择日期以及时间': 'Select Datetime',
    '请选择时间': 'Select Time',
    '系统消息': 'System Info',
    '加载中': 'Loading',
    '点击刷新重新加载': 'Click to refresh',
    '请先选择左侧数据': 'Select from left first.',
    '请选择颜色': 'Select color',
    '现在': 'Now',
    '今天': 'Today',
    '昨天': 'Yesterday',
    '本周一': 'Monday',
    '本月初': 'Earlier this month',
    '上个月初': 'Earlier last month',
    '上个季节初': 'Earlier last quarter',
    '明天': 'Tomorrow',
    '本周日': 'Sunday',
    '本月底': 'last day of this month',
    '{{hours}}小时前': '{{hours}} hour(s) ago',
    '{{hours}}小时后': '{{hours}} hour(s) after',
    '{{days}}天前': '{{days}} day(s) ago',
    '{{days}}天后': '{{days}} day(s) after',
    '{{weeks}}周前': '{{weeks}} week(s) ago',
    '{{weeks}}周后': '{{weeks}} week(s) after',
    '{{months}}月前': '{{months}} month(s) ago',
    '{{months}}月后': '{{months}} month(s) after',
    '{{quarters}}季度前': '{{quarters}} quarter(s) ago',
    '{{quarters}}季度后': '{{quarters}} quarter(s) after',
    ' 至 ': ' to ',
    '最近1天': 'Last day',
    '最近7天': 'Last 7 days',
    '最近90天': 'Last 90 days',
    '上周': 'Last week',
    '本月': 'This month',
    '上个月': 'Last month',
    '上个季节': 'Last quarter',
    '本季度': 'This quarter',
    '请选择日期范围': 'Select Daterange',
    '关闭': 'Close',
    '暂无选项': 'No options',
    '请选择位置': 'Pick location',
    '无': 'None',
    '没有数据': 'No data',
    '请先选择数据': 'Select data first',
    '请选择': 'Select',
    '全选': 'Check all',
    '搜索结果': 'Search result',
    '清空': 'Clear',
    '当前选择': 'Selected',
    '添加一级节点': 'Add root node',
    '添加孩子节点': 'Add child',
    '编辑该节点': 'Edit this node',
    '移除该节点': 'Remove this node',
    '请输入': 'Enter',
    '请输入关键字': 'Enter keywords',
    '新增选项': 'New option',
    '请输入街道信息': 'Enter street info',
    '删除': 'Delete',
    '新增': 'New',
    '新增一条': 'Add a data',
    '新增一条数据': 'Add a data',
    '类型': 'Type',
    '拖拽排序': 'Drag to sort',
    '删除失败': 'Delete failed',
    '确认要删除？': 'Are you sure you want to delete?',
    '组合表单成员数量不够，低于设定的最小{{minLength}}个，请添加更多的成员。':
      'The number of combined form members is not enough. It is lower than the minimum {{minLength}} set. Please add more members.',
    '组合表单成员数量超出，超出设定的最大{{maxLength}}个，请删除多余的成员。':
      'The number of combined form members exceeds the set maximum of {{MaxLength}}}. Please delete the extra members.',
    '子表单验证失败，请仔细检查': 'Validate failed, please check this Subform.',
    '成员{{index}}': 'Member {{index}}',
    '清空数据': 'Clear data',
    '您选择的文件 {{filename}} 大小为 {{actualSize}} 超出了最大为 {{maxSize}} 的限制，请重新选择。':
      'The file {{filename}} you selected has a size of {actualsize}} which exceeds the maximum limit of {{maxsize}}. Please select again.',
  
    '您添加的文件{{files}}不符合类型的`{{accept}}`的设定，请仔细检查。':
      'The file you added {{files}} does not match the setting of the type `{{accept}}`. Please check it carefully.',
    '把文件拖到这，然后松完成添加！':
      'Drag the file here, then release to finish adding!',
    '把图片拖到这，然后松开完成添加！':
      'Drag the picture here, then release to finish adding!',
    '重新上传': 'Repick',
    '重试上传': 'Retry',
    '继续添加': 'Continue add',
    '上传文件': 'Upload file',
    '移除': 'Remove',
    '暂停上传': 'Pause uplaod',
    '开始上传': 'Start upload',
    '已成功上传{{uploaded}}个文件，{{failed}}个文件上传失败，':
      'Successfully uploaded {{uploaded}} files, failed to upload {{failed}} files,',
    '失败文件': 'Failed files.',
    '高度{{height}}px': 'height: {{height}}px',
    '宽度{{width}}px': 'width: {{width}}px',
    '尺寸（{{width}} x {{height}}）': 'size: ({{width}}px x {{height}}px)',
    '您选择的图片不符合尺寸要求, 请上传{{info}}的图片':
      'The picture you selected does not meet the size requirements. Please upload the picture of {{info}}',
    '您选择的图片不符合尺寸要求, 请上传不要超过{{info}}的图片':
      'The picture you selected does not meet the size requirements. Please upload a picture that does not exceed {{info}}`.',
    '您选择的图片不符合尺寸要求, 请上传不要小于{{info}}的图片':
      'The picture you selected does not meet the size requirements. Please upload a picture no less than {{info}}',
    '您选择的图片不符合尺寸要求, 请上传尺寸比率为 {{ratio}} 的图片':
      'The picture you selected does not meet the size requirements. Please upload the picture with the size ratio of ${ration}',
    '文件上传失败请重试': 'File upload failed, please try again',
    '文件上传中': 'File uploading',
    '查看大图': 'Zoom In',
    '裁剪图片': 'Crop picture',
    '当前状态支持从剪切板中粘贴图片文件。':
      'The current state supports pasting picture files from the clipboard.',
    '表单': 'Form',
    '提交': 'Submit',
    '初始化失败': 'Initialization failed',
    '保存成功': 'Saved successfully',
    '保存失败': 'Save failed',
    '依赖的部分字段没有通过验证，请注意填写！':
      'Some of the dependent fields failed to pass the verification, please fill in!',
    '请输入名称': 'Please enter a name',
    '编辑{{label}}': 'Edit {{label}}',
    '每': 'Per',
    '编辑详情': 'Detail',
    '删除当前行': 'Delete current row',
    '操作': 'Operation',
    '新增一行': 'Add a row',
    '暂无标签': 'No tag yet',
    '新增：{{label}}': 'New {{label}}',
    '顶级': 'Root',
    '点击复制': 'Copy',
    '{{page}}/{{lastPage}} 总共：{{total}} 项。':
      '{{page}} of {{lastPage}} total: {{total}}.',
    '每页显示': 'Per page',
    '加载更多': 'Load more',
    '筛选': 'Filter',
    '搜索': 'Search',
    '日期无效': 'Invalid date',
    '关闭弹窗': 'Close',
    '链接': 'Link',
    '当前有 {{modified}} 条记录修改了内容, 但并没有提交。请选择:':
      'There are currently {{modified}} records that have modified the contents, but they have not been submitted. Please select:',
    '放弃': 'Give up',
    '当前有 {{moved}} 条记录修改了顺序, 但并没有提交。请选择:':
      'There are currently {{moved}} records that have changed the order, but have not been committed. Please select:',
    '点击开始排序': 'Click to start sorting',
    '请拖动左边的按钮进行排序': 'Please drag the button on the left to sort',
    '排序': 'Sort',
    '正序': 'Asc',
    '降序': 'Desc',
    '返回数据格式不正确，payload.data 没有数据':
      'The return data format is incorrect, nothing is in `payload.data`',
    '获取失败': 'Fetch failed',
    '返回数据格式不正确，payload.data.items 必须是数组':
      'The return data format is incorrect, payload.data.items Must be an array',
    '验证错误': 'Validate failed',
    '表单验证失败，请仔细检查': 'Form validation failed, please check carefully',
    '验证失败': 'Validate failed',
    '当前值不唯一': 'Current value is not unique',
    '加载选项失败，原因：{{reason}}':
      'Failed to load options because: {{reason}}',
    '获取失败，请重试': 'Fetch failed, please try again',
    '请仔细检查表单规则，部分表单项没通过验证':
      'Please check the form rules carefully. Some form items fail to pass the verification',
    'Email 格式不正确': 'Email format is incorrect',
    '这是必填项': 'This is required',
    'Url 格式不正确': 'Incorrect URL format',
    '请输入整型数字': 'Please enter an integer number',
    '请输入字母': 'Please enter letters',
    '请输入数字': 'Please enter a number',
    '请输入字母或者数字': 'Please enter letters or numbers',
    '请输入浮点型数值': 'Please enter a floating point value',
    '只能输入字母、数字、`-` 和 `_`.':
      'You can only enter letters, numbers, `-` and`_` .',
    '格式不正确, 请输入符合规则为 `${1|raw}` 的内容。':
      'The format is not correct. Please enter the content with the rule `${1| raw}`.',
    '请输入更多的内容，至少输入 $1 个字符。':
      'Please enter more, at least $1 characters.',
    '请控制内容长度, 不要输入 $1 个字符以上':
      'Please control the content length, do not enter more than $1 characters',
    '当前输入值超出最大值 $1，请检查':
      'The current input value exceeds the maximum value of $1, please check',
    '请输入小于 $1 的值': 'Please enter a value less than $1',
    '当前输入值低于最小值 $1，请检查':
      'The current input value is lower than the minimum value of $1, please check',
    '请输入大于 $1 的值': 'Please enter a value greater than $1',
    '请检查 Json 格式。': 'Please check the JSON format.',
    '请输入长度为 $1 的内容':
      'Please enter make sure the length of contents is $1',
    '请不要全输入空白字符': 'Please do not enter all blank characters',
    '输入的数据与 $1 值不一致':
      'The entered data is inconsistent with the value of $1',
    '输入的数据与 $1 不一致': 'The entered data is inconsistent with $1',
    '请输入合法的手机号码': 'Please enter a valid mobile phone number',
    '请输入合法的电话号码': 'Please enter a valid phone number',
    '请输入合法的邮编地址': 'Please enter a legal postal address',
    '请输入合法的身份证号': 'Please enter a valid ID number',
    '系统错误': 'System Error',
    '<空>': '<Empty>',
    '可拖拽排序': 'Drag and drop sorting',
    '上一步': 'Prev',
    '下一步': 'Next',
    '保存并下一步': 'Save & Next',
    '完成': 'Finish',
    '点击选择图片或者将图片拖入该区域':
      'Click to select the picture or drag the picture into the area',
    '重置': 'Reset'
}

/**
 * Amis 中文locale格式：key是中文，值是中文
 */
let amisZh = {}
Object.keys(amisEn).map(key=>{
    amisZh[key] = key;
})

amisZh = {...amisZh,...amisCn};

registerLocale('en', amisEn);
registerLocale('zh-cn', amisZh);

