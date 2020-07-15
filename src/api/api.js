import http from '@/utils/http';

export function getIndexInfo(options) {
    return http.get('/309/index.php', options);
}

// 旭---通知公告
export function getInform(options){
    return http.get('/309/index.php/Affairs/index',options);
} 
export function getInformDetails(options){
    return http.get('/309/index.php/Affairs/details',options);
} 
// 旭---论著专利
export function getWritingIndex(options){
    return http.get('/309/index.php/Writings/index',options);
}
export function getWritingChinapaper(options){
    return http.get('/309/index.php/Writings/chinapaper',options);
}
export function getWritingEnglishpaper(options){
    return http.get('/309/index.php/Writings/chinapaper',options);
}
export function getWritingPatent(options){
    return http.get('/309/index.php/Writings/patent',options);
}
// 旭---论著专利细节
export function getTeacherDetail(options){
    return http.get('/309/index.php/Teachers/details',options);
}
export function getlunwenDetail(options){
    return http.get('/309/index.php/Writings/details',options);
}
export function getPatentDetail(options){
    return http.get('/309/index.php/Writings/patdetails',options);
}
export function getSciFruits1(options){
    return http.get('/309/index.php/SciFruits/index',options);
}
export function getSciFruits2(options){
    return http.get('/309/index.php/SciFruits/scirew',options);
}