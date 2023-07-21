import db from '../../db'
import { query } from '../constant/article'

export const articleService = {

    findAll: async () => {
        return (await db.query(query.findAll)).rows;
    },
    findCountLikeAll: async () => {
        return (await db.query(query.countLikeAll)).rows;
    },
    findById: async (id) => {
        const data = (await db.query(query.findById, [id]));
        return data.rows[0];
    },
    findByTitle: async (title) => {
        const data = (await db.query(query.findByTitle, [title]));
        return data.rows[0];
    },
    findByCreateDate: async (createDate) => {
        const data = (await db.query(query.findBycreateDate, [createDate]));
        return data.rows[0];
    },
    countLike: async (id) => {
        const data = (await db.query(query.countLike, [id]));
        return data.rows[0];
    },
    countLikebyuserid: async (userid) => {
        const data = (await db.query(query.countLike, [userid]));
        return data.rows[0];
    },
    totalLikeAndComment: async (id) => {
        const data = (await db.query(query.totalLikeAndComment, [id]));
        const result = data.rows;

        const formattedResult = result.reduce((acc, curr) => {
            const { articleid, title, content, createdate, staffid, categoryname, categoryid, totallike, totalcomment, directoryid, directoryname } = curr;
            if (!acc.articleid) acc.articleid = articleid;
            if (!acc.title) acc.title = title;
            if (!acc.content) acc.content = content;
            if (!acc.createdate) acc.createdate = createdate;
            if (!acc.staffid) acc.staffid = staffid;
            if (!acc.totallike) acc.totallike = totallike;
            if (!acc.totalcomment) acc.totalcomment = totalcomment;
            if (!acc.categoryid) acc.categoryid = categoryid;
            if (!acc.categoryname) acc.categoryname = categoryname;
            if (!acc.listdirectory) acc.listdirectory = [];
            acc.listdirectory.push({ directoryid, directoryname });
            return acc;
        }, {});

        return result;
    }
}