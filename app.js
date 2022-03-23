var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "segment_media"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM wp_3_postmeta where post_id > 3512 AND post_id < 6105", function (err, result, fields) {
        if (err) throw err;

        result.forEach((result => {
            console.log(result.meta_value)
          /*  var sql = "INSERT INTO wp_3_as3cf_items (provider, region, bucket, path, original_path, is_private, source_type, source_id, source_path, original_source_path, extra_info, originator, is_verified)" +
                " VALUES ('aws', 'eu-west-3', 'awsbucket.segment-media.com', 'wp-content/uploads/sites/3/" + result.meta_value
                + "', 'wp-content/uploads/sites/3/" + result.meta_value +
                "', 0, 'media-library', '" + result.meta_id + "', '" + result.meta_value + "', '" + result.meta_value +"', 'a:2:{s:13:\"private_sizes\";a:0:{}s:14:\"private_prefix\";s:0:\"\";}', 0, 1 )";

            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
            });*/

        }))




    });
});