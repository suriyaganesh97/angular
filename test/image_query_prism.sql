
SELECT item_id, 
  pm_oid, 
  item_number item_number, 
  level_id, 
  Image_Id, 
  Imcycleid, 
  Ipcycleid, 
  Iccycleid, 
  Ipdelete, 
  Imdelete, 
  Icdelete, 
  DISCLOSURE_LEVEL, 
  image_name, 
  orientation, 
  pixel_width, 
  pixel_height, 
  color, 
  search_keyword, 
  content_type, 
  document_type_detail, 
  image_url_http, 
  SUBSTR (image_name,1,INSTR(image_name, '.') - 1 ) image_number, 
  product_isdeleted, 
  prodimg_lastupdate, 
  rank, 
  explicit_delete 
FROM 
  (SELECT VW1.*, 
    CASE 
      WHEN RANK = 1 
      AND (RANK - LAG(RANK, 1, 0) OVER (partition BY ITEM_ID, ORIENTATION, IMAGETYPES ORDER BY ITEM_ID, ORIENTATION, IMAGETYPES) = 0) 
      THEN 1 
      ELSE 0 
    END AS explicit_delete 
  FROM 
    (SELECT vw.*, 
      dense_rank() over (partition BY item_id, orientation, imagetypes order by product_isdeleted, color DESC, priority) rank 
    FROM ( 
      (SELECT h.item_id, 
        h.item_number, 
        ip.pm_oid, 
        h.level_id, 
        Im.Image_Id, 
        Im.Cycle_Id As Imcycleid, 
        Ip.Cycle_Id As Ipcycleid, 
        Ic.Cycle_id as Iccycleid, 
                                Ip.Is_Deleted As Ipdelete, 
        Im.Is_Deleted As Imdelete, 
        Ic.Is_Deleted As Icdelete, 
                                im.DISCLOSURE_LEVEL, 
        ic.cds_country, 
        im.dpi_resolution, 
        REPLACE(im.orientation , ' facing', '') AS orientation, 
        im.pixel_width 
        ||'x' 
        ||im.pixel_height AS ImageTypes, 
        im.pixel_width, 
        im.pixel_height, 
        im.image_name, 
        im.color, 
        im.search_keyword, 
        Im.CONTENT_TYPE content_type, 
        im.document_type_detail, 
        CASE 
          WHEN im.search_keyword = 'ecommerce' 
          THEN 1 
          ELSE DECODE(im.document_type_detail, 'product image with output sample', 2, 'product image', 3, 'product image - not as shown with output sample', 4, 'product image - not as shown', 5, 'text graphics', 6, 'Concept Graphic', 7, 8 ) 
        END AS priority, 
        DECODE(im.document_type_detail, 'product image with output sample', 2, 'product image', 3, 'product image - not as shown with output sample', 4, 'product image - not as shown', 5, 'text graphics', 6, 'Concept Graphic', 7, 8 ) dtd_priority, 
        ip.cycle_id Product_CycleId, 
        im.image_url_http image_url_http, 
        CASE 
          WHEN (ip.Is_Deleted = 1 
          OR im.Is_Deleted    = 1 
          OR ic.Is_Deleted    = 1) 
          THEN 1 
          ELSE 0 
        END AS product_isdeleted, 
        greatest(ip.modify_date, ip.created_date) prodimg_lastupdate 
      FROM prism_item_hierarchy h 
      INNER JOIN hp_pdb_img_products_mv ip 
      ON ip.pm_oid = h.pm_oid 
      INNER JOIN hp_pdb_img_ctry_mv ic 
      ON ip.image_id = ic.image_id 
      INNER JOIN hp_pdb_images_mv im 
      ON im.image_id              = ip.image_id 
      WHERE h.instance_id         = 1 
      AND h.level_id              = 7 
      AND ic.cds_country          = 'US' 
      AND Im.DISCLOSURE_LEVEL     in ('Public', 'HP Confidential') 
      AND (im.search_keyword      = 'ecommerce' 
      OR im.DOCUMENT_TYPE_DETAIL IN ('product image with output sample','product image','product image - not as shown with output sample', 
      'product image - not as shown','text graphics','Concept Graphic')) 
      AND ( ((Im.PIXEL_WIDTH 
        ||'x' 
        ||Im.PIXEL_HEIGHT   IN ('180x135','320x240','513x385','54x41','573x430','99x74','257x193')) 
      AND (Im.ORIENTATION ) IN ('Right facing','Left facing','Center facing','Rear facing','Left profile closed','Left rear facing','Right rear facing', 
      'Right profile closed','Right facing screen center','Rear facing open','Top view closed','Detail view') 
      AND (Im.BACKGROUND)    = 'Transparent' 
      AND (Im.CONTENT_TYPE)  = 'png') 
      OR ((Im.PIXEL_WIDTH 
        ||'x' 
        ||Im.PIXEL_HEIGHT   IN ('400x400')) 
      AND (Im.ORIENTATION ) IN ('Right facing','Left facing','Center facing') 
      AND (Im.BACKGROUND)    = 'White' 
      AND (Im.CONTENT_TYPE)  = 'jpg')) 
      AND im.dpi_resolution  >= 72 
      AND EXISTS 
        (SELECT 1 
        FROM prism_item_hierarchy h1 
        INNER JOIN hp_pdb_img_products_mv ip 
        ON ip.pm_oid = h1.pm_oid 
        INNER JOIN hp_pdb_img_ctry_mv ic 
        ON ip.image_id = ic.image_id 
        INNER JOIN hp_pdb_images_mv im 
        ON im.image_id       = ip.image_id 
        WHERE h1.instance_id = 1 
        AND h1.level_id      = 7 
        AND ic.cds_country   = 'US' 
        AND EXISTS 
          (SELECT 1 
          FROM prism_item_cultures ct 
          INNER JOIN PRISM_GEOGRAPHY pg 
          ON ct.culture_id       = 4 
          AND pg.culture_id      = 4 
          AND pg.instance_id     = ct.instance_id 
          WHERE h1.item_id       = ct.item_id 
          AND h1.instance_id     = ct.instance_id 
          AND h1.instance_id     = pg.instance_id 
          AND pg.culture_code    = 'us-en' 
          AND ct.plc_status     IN ('O','L','F') 
          AND ct.isroll          = 0 
          AND ct.publishable_flag=1 
          ) 
          AND h1.item_id     = h.item_id 
          and h.item_number in ('7DB37AT') 
        ) 
      ) 
    ORDER BY item_id, orientation, ImageTypes, color DESC, pixel_width DESC, PIXEL_HEIGHT DESC, priority, prodimg_lastupdate DESC) vw 
    ) vw1 
  ) 
WHERE rank           = 1 
And (Explicit_Delete = 0 
OR product_isdeleted = 0);



select DECODE(min(cycle_id), 0, -1, 1, -1, min(cycle_id)) MIN_CYCLE_ID, max(cycle_id) MAX_CYCLE_ID from hp_pdb_ext_delta_timestamps_mv where load_type ='IMAGELOADER' 
and cycle_completed = 'Y' 
and cycle_id >= 6606 AND LOAD_TIME <= (select delta_update_time from prism_delta_timestamps where instance_id= 1 and cycle_id=68754); 
