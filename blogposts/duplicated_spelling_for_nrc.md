## Duplication in spelling for NRC towship code

### Total

    ```sql
    select t.name_en, region_code, r.name_en as region, count(*) as total from nrc_townships as t join nrc_regions as r on t.region_code = r.code  group by name_en, region_code having count(*) > 1;
    ```

    ```sql
    +---------+--------------+--------+-------+
    | name_en | region_code  | region | total |
    +---------+--------------+--------+-------+
    | SaKaNa  | 763244882086 | 5      |     2 |
    | YaPhaNa | 4c3244882087 | 6      |     2 |
    | YaBaNa  | 1b3244882092 | 11     |     2 |
    | BaHaNa  | 7e3244882093 | 12     |     2 |
    | KaLaNa  | 393244882094 | 13     |     2 |
    | MaYaTa  | 393244882094 | 13     |     2 |
    | MaYaNa  | 393244882094 | 13     |     2 |
    | NaSaNa  | 393244882094 | 13     |     2 |
    +---------+--------------+--------+-------+
    8 rows in set (0.02 sec)
    ```

-   SaKaNa (စကန ၊ ဆကန ) (စစ်ကိုင်းတိုင်းဒေသကြီး)
    ```sql
    select * from nrc_townships where region_code = '763244882086' and name_en = 'SaKaNa';
    +-------+-----------+---------+----------------+----------------+--------------+--------------+--------+---------------------+---------------------+
    | id    | name_mm   | name_en | description_en | description_mm | code         | region_code  | status | created_date        | modified_date       |
    +-------+-----------+---------+----------------+----------------+--------------+--------------+--------+---------------------+---------------------+
    | 30099 | စကန       | SaKaNa  |                |                | b43244882195 | 763244882086 |      0 | 2023-08-17 15:29:01 | 2023-08-17 15:29:01 |
    | 30484 | ဆကန       | SaKaNa  |                |                | 713244882596 | 763244882086 |      0 | 2023-08-17 15:29:05 | 2023-08-17 15:29:05 |
    +-------+-----------+---------+----------------+----------------+--------------+--------------+--------+---------------------+---------------------+
    2 rows in set (0.01 sec)
    ```
    - Related Person profile-
    ```sql
    select p.crm_id, identification, pr.related_id as partner_code from person as p join person_relationships as pr on p.crm_id = pr.crm_id where identification like '5/SaKaNa%' and mapping_type_id = 4;
    ```
    ```sql
    +--------------------------------------+--------------------+----------------------------------+
    | crm_id                               | identification     | partner_code                     |
    +--------------------------------------+--------------------+----------------------------------+
    | 734a007a-6710-4b23-a864-aff73744817d | 5/SaKaNa(C)005048  | 5bb02787b7f64455b2ef043a30fa9316 |
    | 5fa0a94a-d787-4460-ab8e-8a9a61d1398c | 5/SaKaNa(C)002640  | 671ac9b533184fb5acc7c527f167faf9 |
    | 6d8f5c2d-7cad-405e-9fce-e0452ec82cb4 | 5/SaKaNa(C)000012  | e2fedec9e7c44986a4a48260bb9328ad |
    | 334012e2-4251-4290-be6b-4d425a160aa4 | 5/SaKaNa(C)001429  | 7fbd5be87e1a4ded808c5dc04f0f7c43 |
    | 8c32fe48-aaf1-4925-a7ec-af5d6e1b58d2 | 5/SaKaNa(C)002153  | 3f50a8c539de492d98b5c414865e534c |
    ......
    1938 rows in set (0.17 sec)
    ```
    -----
-   YaPhaNa (ရဖန ၊ ယဖန ) (တနင်္သာရီတိုင်းဒေသကြီး)
    ```sql
    select * from nrc_townships where region_code = '4c3244882087' and name_en = 'YaPhaNa';
    ```
    ```sql
    +-------+-----------+---------+----------------+----------------+--------------+--------------+--------+---------------------+---------------------+
    | id    | name_mm   | name_en | description_en | description_mm | code         | region_code  | status | created_date        | modified_date       |
    +-------+-----------+---------+----------------+----------------+--------------+--------------+--------+---------------------+---------------------+
    | 30135 | ရဖန       | YaPhaNa |                |                | 563244882231 | 4c3244882087 |      0 | 2023-08-17 15:29:01 | 2023-08-17 15:29:01 |
    | 30469 | ယဖန       | YaPhaNa |                |                | 953244882581 | 4c3244882087 |      0 | 2023-08-17 15:29:05 | 2023-08-17 15:29:05 |
    +-------+-----------+---------+----------------+----------------+--------------+--------------+--------+---------------------+---------------------+
    2 rows in set (0.03 sec)
    ```
    - Related Person Profile
    ```sql
    select p.crm_id, identification, pr.related_id as partner_code from person as p join person_relationships as pr on p.crm_id = pr.crm_id where identification like '6/YaPhaNa%' and mapping_type_id = 4;
    ```
    ```sql
    +--------------------------------------+--------------------+----------------------------------+
    | crm_id                               | identification     | partner_code                     |
    +--------------------------------------+--------------------+----------------------------------+
    | 34a9bb29-9ed8-4994-a5fb-fe875e428fc7 | 6/YaPhaNa(C)063091 | b03489a4eb3e4839b3fa1b3703bbb5e7 |
    | dd78f865-bd2a-40f7-94e9-b66d633795d2 | 6/YaPhaNa(C)029403 | d4449495e5c749179a4f97ccc1a9632c |
    | d5720703-94e0-49f5-9eae-9dba61f2a6c0 | 6/YaPhaNa(C)033384 | 3923cff77c444e8b84f0a2b10921d8cb |
    | e561eed8-c740-4ad6-9806-ec0233d0bbe2 | 6/YaPhaNa(C)002099 | 7096cfe5de524c8f8b32e9ac465c2156 |
    | 44858e42-ffa3-48f6-9117-9af4d42fce78 | 6/YaPhaNa(C)045110 | ea3be26daf3149f2bcc75e35df21e2f7 |
    | 71dddc5e-267b-423c-ba49-c1d96e59f222 | 6/YaPhaNa(C)082339 | 8fda620af44d46be80405ffb86bb7ebb |
    ........
    ........
    ........
    126 rows in set (0.03 sec)
    ```
-   YaBaNa (ရဗန ၊ ယဘန ) (ရခိုင်ပြည်နယ်)
    ```sql
    select * from nrc_townships where region_code = '1b3244882092' and name_en = 'YaBaNa';
    ```
    ```sql
    +-------+-----------+---------+----------------+----------------+--------------+--------------+--------+---------------------+---------------------+
    | id    | name_mm   | name_en | description_en | description_mm | code         | region_code  | status | created_date        | modified_date       |
    +-------+-----------+---------+----------------+----------------+--------------+--------------+--------+---------------------+---------------------+
    | 30291 | ရဗန       | YaBaNa  |                |                | 343244882387 | 1b3244882092 |      0 | 2023-08-17 15:29:03 | 2023-08-17 15:29:03 |
    | 30470 | ယဘန       | YaBaNa  |                |                | 093244882582 | 1b3244882092 |      0 | 2023-08-17 15:29:05 | 2023-08-17 15:29:05 |
    +-------+-----------+---------+----------------+----------------+--------------+--------------+--------+---------------------+---------------------+
    2 rows in set (0.00 sec)
    ```
    - Related Person Profile
    ```sql
    select p.crm_id, identification, pr.related_id as partner_code from person as p join person_relationships as pr on p.crm_id = pr.crm_id where identification like '11/YaBaNa%' and mapping_type_id = 4;
    ```
    ```sql
    +--------------------------------------+---------------------+----------------------------------+
    | crm_id                               | identification      | partner_code                     |
    +--------------------------------------+---------------------+----------------------------------+
    | 8fade868-2014-4558-999e-ec7d05ad5786 | 11/YaBaNa(C)013888  | ab2be68c31194c8a95a3638096136778 |
    | ab9e4c65-88d9-4845-979b-a2bdf4727eee | 11/YaBaNa(C)031984  | caefb8f903a346c7b2d9cc8151e83acf |
    | da137927-1a65-4d96-95c9-647a663b643f | 11/YaBaNa(C)007350  | c457b060927049659bec9efe0e3dc3fb |
    | 69eb039d-66f9-4ba4-b9ab-ee3464469a29 | 11/YaBaNa(C)012026  | 040a5333b32e45a9a56167c9f8c017dc |
    | f3742485-d6cf-45e5-97bc-44d5f8bda738 | 11/YaBaNa(C)030084  | 3262dfbd3082426a8298539d8830e1a4 |
    | 5734f1ef-bd14-4919-ac56-890b11d083f6 | 11/YaBaNa(C)030704  | 215a9b26966b4fd69d3666b349c28c73 |
    ........
    ........
    ........
    957 rows in set (0.16 sec)
    ```
-   BaHaNa (ဗဟန ၊ ဘဟန ) (ရန်ကုန်တိုင်းဒေသကြီး)
    ```sql
    select * from nrc_townships where region_code = '7e3244882093' and name_en = 'BaHaNa';
    ```
    ```sql
    +-------+-----------+---------+----------------+----------------+--------------+--------------+--------+---------------------+---------------------+
    | id    | name_mm   | name_en | description_en | description_mm | code         | region_code  | status | created_date        | modified_date       |
    +-------+-----------+---------+----------------+----------------+--------------+--------------+--------+---------------------+---------------------+
    | 30302 | ဗဟန       | BaHaNa  |                |                | ed3244882398 | 7e3244882093 |      0 | 2023-08-17 15:29:03 | 2023-08-17 15:29:03 |
    | 30467 | ဘဟန       | BaHaNa  |                |                | b83244882579 | 7e3244882093 |      0 | 2023-08-17 15:29:05 | 2023-08-17 15:29:05 |
    +-------+-----------+---------+----------------+----------------+--------------+--------------+--------+---------------------+---------------------+
    2 rows in set (0.01 sec)
    ```
    - Related Person Profile
    ```sql
    select p.crm_id, identification, pr.related_id as partner_code from person as p join person_relationships as pr on p.crm_id = pr.crm_id where identification like '12/BaHaNa%' and mapping_type_id = 4;
    ```
    ```sql
    +--------------------------------------+---------------------+----------------------------------+
    | crm_id                               | identification      | partner_code                     |
    +--------------------------------------+---------------------+----------------------------------+
    | 8bacf885-ce56-4186-a94e-629d676aa006 | 12/BaHaNa(C)000000  | cefba9e284dc46d29020562da8b84aa7 |
    | a34dff74-177e-4422-9e6a-564a71f1cb4f | 12/BaHaNa(C)000003  | 88b67caddcc04ded8699762202cb122e |
    | 1aa39585-0598-40cb-9bb4-ae4094770c14 | 12/BaHaNa(C)000084  | fd7b9fdf3d9b457dbb013b6474a2da7b |
    | f5e2a339-7c31-4ad4-95ff-0c8c7af5d68d | 12/BaHaNa(C)000137  | 909b2dfa422a49f48e1e6a8da6c8b07d |
    | e98f9cff-64a9-4044-986a-2196811978a5 | 12/BaHaNa(C)000061  | a3093670bd37452ca079accb0ad85b6f |
    | 2a0973d6-615f-436f-acd4-c02e3552d3f5 | 12/BaHaNa(AC)000032 | 0220cb0b6e6f4941a582887842d6b49e |
    ........
    ........
    ........
    6893 rows in set (0.60 sec)
    ```
-   KaLaNa (ကလန ၊ ခလန ) (ရှမ်းပြည်နယ်)
    ```sql
    select * from nrc_townships where region_code = '393244882094' and name_en = 'KaLaNa';
    ```
    ```sql
    +-------+-----------+---------+----------------+----------------+--------------+--------------+--------+---------------------+---------------------+
    | id    | name_mm   | name_en | description_en | description_mm | code         | region_code  | status | created_date        | modified_date       |
    +-------+-----------+---------+----------------+----------------+--------------+--------------+--------+---------------------+---------------------+
    | 30354 | ကလန       | KaLaNa  |                |                | aa3244882450 | 393244882094 |      0 | 2023-08-17 15:29:03 | 2023-08-17 15:29:03 |
    | 30390 | ခလန       | KaLaNa  |                |                | a73244882486 | 393244882094 |      0 | 2023-08-17 15:29:04 | 2023-08-17 15:29:04 |
    +-------+-----------+---------+----------------+----------------+--------------+--------------+--------+---------------------+---------------------+
    2 rows in set (0.01 sec)
    ```
    - Related Person Profile
    ```sql
    select p.crm_id, identification, pr.related_id as partner_code from person as p join person_relationships as pr on p.crm_id = pr.crm_id where identification like '13/KaLaNa%' and mapping_type_id = 4;
    ```
    ```sql
    +--------------------------------------+---------------------+----------------------------------+
    | crm_id                               | identification      | partner_code                     |
    +--------------------------------------+---------------------+----------------------------------+
    | 19a91df1-b257-44cc-9f41-475d31288c18 | 13/KaLaNa(C)004173  | 0ce11123788240a6965f0fbab7fb6919 |
    | cf555469-830b-4a12-87de-90bb628c0705 | 13/KaLaNa(C)010416  | c68f34e7b06a4c1d9aaf8df9362355e4 |
    | 68f35933-36de-4730-9b17-ebdce712122b | 13/KaLaNa(C)000615  | d64752bba0a1484a9b3108215f735001 |
    | d6b041f3-27eb-4322-b75d-c1d3f4db545a | 13/KaLaNa(AC)000138 | 6e5bc38c56de40a8b389131644fbbf8c |
    | ef0922fe-c1ac-4341-9706-90e51dda559a | 13/KaLaNa(C)000031  | e4e4ffe3666b4f7badac81b49d8ee8c5 |
    | 7de058ae-9924-4700-b148-401ef66b43eb | 13/KaLaNa(C)001235  | b1d16706026142e39c64240510a12547 |
    ........
    ........
    ........
    1550 rows in set (0.07 sec)
    ```
-   MaYaTa (မရတ ၊ မယတ ) (ရှမ်းပြည်နယ်)
    ```sql
    select * from nrc_townships where region_code = '393244882094' and name_en = 'MaYaTa';
    ```
    ```sql
    +-------+-----------+---------+----------------+----------------+--------------+--------------+--------+---------------------+---------------------+
    | id    | name_mm   | name_en | description_en | description_mm | code         | region_code  | status | created_date        | modified_date       |
    +-------+-----------+---------+----------------+----------------+--------------+--------------+--------+---------------------+---------------------+
    | 30381 | မရတ       | MaYaTa  |                |                | 3f3244882477 | 393244882094 |      0 | 2023-08-17 15:29:04 | 2023-08-17 15:29:04 |
    | 30508 | မယတ       | MaYaTa  |                |                | a04206101579 | 393244882094 |      0 | 2023-08-17 15:29:05 | 2023-08-17 15:29:05 |
    +-------+-----------+---------+----------------+----------------+--------------+--------------+--------+---------------------+---------------------+
    2 rows in set (0.01 sec)
    ```
    - Related Person Profile
    ```sql
    select p.crm_id, identification, pr.related_id as partner_code from person as p join person_relationships as pr on p.crm_id = pr.crm_id where identification like '13/MaYaTa%' and mapping_type_id = 4;
    ```
    ```sql
    +--------------------------------------+---------------------+----------------------------------+
    | crm_id                               | identification      | partner_code                     |
    +--------------------------------------+---------------------+----------------------------------+
    | 2a89a4ce-5730-43b9-9da1-4c7276c5059b | 13/MaYaTa(C)055385  | 171d5b1d0da5454da5bc5cc9df628d83 |
    | 341acc95-4631-450e-a5c8-3367c3673134 | 13/MaYaTa(C)000395  | af183213f305414f8d5140a7e3b219b3 |
    | 6d31390d-0a00-420f-872a-590c032806fc | 13/MaYaTa(C)026516  | 2bb494518e61414782718f603b26bb3f |
    | 30f1a552-ae6e-451f-9b33-9dcb7684f96e | 13/MaYaTa(C)017595  | a82b69d80cb641819d7cb156f8f6f351 |
    | 36ff8682-061d-4777-a09c-0eee3a83f991 | 13/MaYaTa(C)032522  | e5e7c0ed06eb40e89ea6b88be803563b |
    | 0a4b45bf-5837-4fd4-a814-5c3287e9a684 | 13/MaYaTa(C)002503  | 4fc9ecbdfcd2420fb9d42aeaf3801e01 |
    | e7fc16f6-ca48-41b4-8667-79829d6ff70c | 13/MaYaTa(C)006492  | 4412b0aaa919471bb6c57a8fc1c9d657 |
    ........
    ........
    ........
    57 rows in set (0.02 sec)
    ```
-   MaYaNa (မယန ၊ မရန ) (ရှမ်းပြည်နယ်)
    ```sql
    select * from nrc_townships where region_code = '393244882094' and name_en = 'MaYaNa';
    ```
    ```sql
    +-------+-----------+---------+----------------+----------------+--------------+--------------+--------+---------------------+---------------------+
    | id    | name_mm   | name_en | description_en | description_mm | code         | region_code  | status | created_date        | modified_date       |
    +-------+-----------+---------+----------------+----------------+--------------+--------------+--------+---------------------+---------------------+
    | 30382 | မယန       | MaYaNa  |                |                | fa3244882478 | 393244882094 |      0 | 2023-08-17 15:29:04 | 2023-08-17 15:29:04 |
    | 30490 | မရန       | MaYaNa  |                |                | b43244882602 | 393244882094 |      0 | 2023-08-17 15:29:05 | 2023-08-17 15:29:05 |
    +-------+-----------+---------+----------------+----------------+--------------+--------------+--------+---------------------+---------------------+
    2 rows in set (0.00 sec)
    ```
    - Related Person Profile
    ```sql
    select p.crm_id, identification, pr.related_id as partner_code from person as p join person_relationships as pr on p.crm_id = pr.crm_id where identification like '13/MaYaNa%' and mapping_type_id = 4;
    ```
    ```sql
    +--------------------------------------+---------------------+----------------------------------+
    | crm_id                               | identification      | partner_code                     |
    +--------------------------------------+---------------------+----------------------------------+
    | 08608b0e-e6e1-47bb-9d83-39ff391c8890 | 13/MaYaNa(C)090869  | 860e97a0393244c4a186a0e1e1f89327 |
    | 9b003511-1a86-468f-ada8-f8d876222f32 | 13/MaYaNa(C)101387  | ba8480c1ec614984982fd34b1c663729 |
    | eb5f6b3f-c5ff-4e53-831f-90e622ef45c4 | 13/MaYaNa(C)028173  | 49e88aaf9fa0411fb8c1781a2a69f951 |
    | a4618121-b506-4cdb-b3f2-397a303e102c | 13/MaYaNa(C)062039  | ef367e0887fc46faa82e05ea911d1040 |
    | f7e6192d-dc55-420a-943e-6e664fe83a1f | 13/MaYaNa(C)014085  | dc5eb601509d4a47bda2f83e2ace41f7 |
    | dce93411-bf7c-45bb-ae1f-f24d43dec86f | 13/MaYaNa(C)032927  | d033c88fade449449a72efe490c771fd |
    | fc5201f6-5ad6-414b-8e2e-02ca7ecd6868 | 13/MaYaNa(C)045795  | f33db7ab6f914d0ab55c9a833df3b16a |
    ........
    ........
    ........
    73 rows in set (0.02 sec)
    ```
-   NaSaNa (စကန ၊ ဆကန ) (စစ်ကိုင်းတိုင်းဒေသကြီး)
    ```sql
    select * from nrc_townships where region_code = '393244882094' and name_en = 'NaSaNa';
    ```
    ```sql
    +-------+-----------+---------+----------------+----------------+--------------+--------------+--------+---------------------+---------------------+
    | id    | name_mm   | name_en | description_en | description_mm | code         | region_code  | status | created_date        | modified_date       |
    +-------+-----------+---------+----------------+----------------+--------------+--------------+--------+---------------------+---------------------+
    | 30388 | နဆန       | NaSaNa  |                |                | ed3244882484 | 393244882094 |      0 | 2023-08-17 15:29:04 | 2023-08-17 15:29:04 |
    | 30491 | နစန       | NaSaNa  |                |                | 283244882603 | 393244882094 |      0 | 2023-08-17 15:29:05 | 2023-08-17 15:29:05 |
    +-------+-----------+---------+----------------+----------------+--------------+--------------+--------+---------------------+---------------------+
    2 rows in set (0.01 sec)
    ```
    - Related Person Profile
    ```sql
    select p.crm_id, identification, pr.related_id as partner_code from person as p join person_relationships as pr on p.crm_id = pr.crm_id where identification like '13/NaSaNa%' and mapping_type_id = 4;
    ```
    ```sql
    +--------------------------------------+---------------------+----------------------------------+
    | crm_id                               | identification      | partner_code                     |
    +--------------------------------------+---------------------+----------------------------------+
    | 3b8f9a37-d158-4704-80d3-d5f1488eb05b | 13/NaSaNa(C)023496  | df13b2606e1b4786bdf39db57da95ea3 |
    | c99df689-c421-4ba7-835d-3c6a634da7e6 | 13/NaSaNa(C)000003  | 4571234a8ef8424e825c072828d4b5c1 |
    | 548c793e-490b-4b34-87ee-ed0f894df6ab | 13/NaSaNa(C)001562  | 94f5c808837b468d9809adff150dcccb |
    | fb3f8fe6-fd4e-4103-bd9a-836941919b35 | 13/NaSaNa(C)015489  | 359dbd5302d1482d9416af43fdba49ce |
    | 9adb5e6a-2135-4e63-8abf-eec484db778c | 13/NaSaNa(C)006820  | 9eae56cff4884c11a6ab2e01b5ed7396 |
    | ae4a917d-a10d-477a-aa76-9f0ac13f9088 | 13/NaSaNa(C)023723  | 57bac6ed91e7435ebcc8ca0942825e90 |
    | bcea4160-52f6-4aba-99fc-f9e88bfad2f5 | 13/NaSaNa(C)020715  | 3e741b8a0efa4a958cd01fc3a4332524 |
    ........
    ........
    ........
    397 rows in set (0.06 sec)
    ```
