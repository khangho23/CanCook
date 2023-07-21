
export const query = {
    findAll: "select * from article ",
    findById: "select * from id where id = $1",
    findByTitle: "select * from title where title = $1",
    findBycreateDate: "select * from createDate where createDate = $1",
    countLike: "SELECT p.id, p.title, COUNT(lp.id) AS like_count FROM article AS p LEFT JOIN likeofarticle AS lop ON p.id = lop.articleid LEFT JOIN likearticle AS lp ON lop.likeid = lp.id WHERE p.id=$1 GROUP BY p.id, p.title",
    countLikeAll: "SELECT p.id, p.title, COUNT(lp.id) AS like_count FROM article AS p LEFT JOIN likeofarticle AS lop ON p.id = lop.articleid LEFT JOIN likearticle AS lp ON lop.likeid = lp.id GROUP BY p.id, p.title",
    countLikeByUserId: "SELECT p.id, p.title, COUNT(lp.id) AS like_count FROM article AS p LEFT JOIN likeofarticle AS lop ON p.id = lop.articleid LEFT JOIN likearticle AS lp ON lop.likeid = lp.id where lp.userid = $1 GROUP BY p.id, p.title",
    totalLikeAndComment: `SELECT p.id AS articleid, p.title,p.content,p.createdate,p.staffid,COUNT(lop.likeid) AS totallike, COUNT(cop.commentid) AS totalcomment, c.id AS categoryid, c.name AS categoryname, d.id AS directoryid, d.name AS directoryname 
    FROM article AS p LEFT JOIN likeofarticle AS lop ON p.id = lop.articleid 
    LEFT JOIN commentofarticle AS cop ON p.id = cop.articleid LEFT JOIN categoryofarticle AS cop2 ON p.id = cop2.articleid 
    LEFT JOIN directoryofarticle AS dop ON p.id = dop.articleid LEFT JOIN category AS c ON cop2.categoryid = c.id 
    LEFT JOIN directory AS d ON dop.directoryid = d.id WHERE p.id = $1 
    GROUP BY p.id, p.title, c.id, c.name, d.id, d.name,c.id,c.name; `
}