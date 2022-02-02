-- query 1 promotion data
select  pxp.status,pxp.name as ADMINISTRATIVE_NAME, pxp.priority,pxp.startdate,pxp.enddate,pxauth.comments as Administrative_description
from px_promotion pxp,px_promoauth pxauth
where  pxp.px_promotion_id=pxauth.px_promotion_id and pxp.cdrequired = '1' and pxp.enddate>=sysdate;

--query 2 coupon data 
select pxp.name as promotion_name,pxp.startdate,pxp.enddate,pxp.status,pxcd.code as coupon_code
from px_promotion pxp,px_cdpool pxcd
where pxp.px_promotion_id=pxcd.reference_id and pxp.cdrequired = '1' and pxp.enddate>=sysdate and pxp.status='1';