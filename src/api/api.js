import http from '@/utils/http';

export function getIndexInfo(options) {
    return http.get('/309/index.php', options);
}