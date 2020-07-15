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