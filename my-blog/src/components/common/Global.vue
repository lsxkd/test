<script>
    const ips = 'http://192.168.31.159/'
    const api='http://192.168.31.159:3003/';

    function add0(m){return m<10?'0'+m:m }
    //时间戳转化成时间格式
    function timeFormat(timestamp){ //格式化时间
    //timestamp是整数，否则要parseInt转换,不会出现少个0的情况
        var time = new Date(timestamp);
        var year = time.getFullYear();
        var month = time.getMonth()+1;
        var date = time.getDate();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        return year+'-'+add0(month)+'-'+add0(date)+' '+add0(hours)+':'+add0(minutes)+':'+add0(seconds);
    }
    export default
    {
        api,ips,timeFormat//借口地址

    }
</script>