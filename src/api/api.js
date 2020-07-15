import http from '@/utils/http';

export function getIndexInfo(options) {
    return http.get('/309/index.php', options);
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
//研究生培养
export function getGradDoctor(options) {
    return http.get('/309/index.php/Students/index', options);
}
export function getReadDoctor(options) {
    return http.get('/309/index.php/Students/readdoctor', options);
}
export function getReadMaster(options) {
    return http.get('/309/index.php/Students/readmaster', options);
}
export function getMaster(options) {
    return http.get('/309/index.php/Students/master', options);
}
//学术交流
export function getAcaInfo(options) {
    return http.get('/309/index.php/academic/index', options);
}
export function getAcaDetails(options) {
    return http.get('/309/index.php/academic/details', options);
}