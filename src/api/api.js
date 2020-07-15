import http from '@/utils/http';

export function getIndexInfo(options) {
    return http.get('/309/index.php', options);
}

export function getStudentInfo(options) {
    return http.get('/309/index.php/Students/index', options);
}

export function getReadDoctor(options) {
    return http.get('/309/index.php/Students/readdoctor', options);
}

export function getGradMaster(options) {
    return http.get('/309/index.php/Students/master', options);
}

export function getReadMaster(options) {
    return http.get('/309/index.php/Students/readmaster', options);
}

export function getDetail(options) {
    return http.get('/309/index.php/Teachers/details', options);
}
// 旭---通知公告
export function getInform(options) {
    return http.get('/309/index.php/Affairs/index', options);
}
export function getInformDetails(options) {
    return http.get('/309/index.php/Affairs/details', options);
}
// 旭---论著专利
export function getWritingIndex(options) {
    return http.get('/309/index.php/Writings/index', options);
}
export function getWritingChinapaper(options) {
    return http.get('/309/index.php/Writings/chinapaper', options);
}
export function getWritingEnglishpaper(options) {
    return http.get('/309/index.php/Writings/chinapaper', options);
}
export function getWritingPatent(options) {
    return http.get('/309/index.php/Writings/patent', options);
}
// 旭---论著专利细节
export function getTeacherDetail(options) {
    return http.get('/309/index.php/Teachers/details', options);
}
export function getlunwenDetail(options) {
    return http.get('/309/index.php/Writings/details', options);
}
export function getPatentDetail(options) {
    return http.get('/309/index.php/Writings/patdetails', options);
}
export function getSciFruits1(options) {
    return http.get('/309/index.php/SciFruits/index', options);
}
export function getSciFruits2(options) {
    return http.get('/309/index.php/SciFruits/scirew', options);
}
//新闻动态
export function getNewsInfo(options) {
    return http.get('/309/index.php/News/index', options);
}
export function getNewsDetils(options) {
    return http.get('/309/index.php/News/details', options);
}
// 师资力量
export function getProfessor(options) {
    return http.get('/309/index.php/Teachers/index', options);
}
export function getLeturer(options) {
    return http.get('/309/index.php/Teachers/teachers', options);
}
export function getViceprofessor(options) {
    return http.get('/309/index.php/Teachers/viceprofessor', options);
}
export function getTeachersDetails(options) {
    return http.get('/309/index.php/Teachers/details', options);
}
//学术交流
export function getAcaInfo(options) {
    return http.get('/309/index.php/academic/index', options);
}
export function getAcaDetails(options) {
    return http.get('/309/index.php/academic/details', options);
}