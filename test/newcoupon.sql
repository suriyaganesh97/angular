--to find count of coupons for promotion
select pxp.name as promotion_name,count(*) from px_promotion pxp,px_cdpool pxcd
where pxp.px_promotion_id=pxcd.reference_id and pxp.cdrequired = '1' and pxp.enddate>=sysdate and pxp.status='1' group by pxp.name order by count(*);


--query for promotions having single coupon
select pxp.name as promotion_name,pxp.startdate,pxp.enddate,pxp.status,pxcd.code as coupon_code 
from px_promotion pxp,px_cdpool pxcd
where pxp.px_promotion_id=pxcd.reference_id and pxp.cdrequired = '1' and pxp.enddate>=sysdate and pxp.status='1' and pxp.name in ('Coupon_ABSOLUTEHPSA10-727804441','Coupon_HPSAPW25_new-727272934','Coupon_CCDTDWSCLOSER10-727779439','Coupon_HPSACOMM20-727814934','Coupon_MCAFEEHPSA20-727804442','Coupon_HPSA33-727258434','Coupon_HPCAREPACK15-727396449','Coupon_HPE24320-727969435','Coupon_DTSMB15-727959435','Coupon_EARLYBIRD_new-727947934','Coupon_CCDTDWSCLOSER15_B-727887935');

--query to take promotions with multiple coupons(9429818  Rows)
select pxp.name as promotion_name,pxp.startdate,pxp.enddate,pxp.status,pxcd.code as coupon_code 
from px_promotion pxp,px_cdpool pxcd
where pxp.px_promotion_id=pxcd.reference_id and pxp.cdrequired = '1' and pxp.enddate>=sysdate and pxp.status='1' and pxp.name in ('Coupon_HPCAREPACK20-727377434','Coupon_CCDTDWSSTO20-727959434','Coupon_5HOLIDAYGAMER2020-727878947','Coupon_SMB10-727928953','Coupon_JUMPMON15-727374439','Coupon_CCDTDWS10-727929434','Coupon_10HOLIDAYGAMER2020-727878948','Coupon_CCSMB10-727928952','Coupon_JUMPACCY5-727951434','Coupon_OMENAMBASSADOR1-727824937','Coupon_OMENAMBASSADOR-727824936','Coupon_Z2G5-727953934','Coupon_30PCFY21-727929447','Coupon_100PCFY2021-727929442','Coupon_75PCFY2021-727929441','Coupon_25PCFY21-727929439','Coupon_50PCFY2021-727929440','Coupon_500PCFY2021-727929446','Coupon_400PCFY2021-727929445','Coupon_200PCFY2021-727929443','Coupon_300PCFY2021-727929444','Coupon_H2110-727879935','Coupon_TCO250Q2FY21-727929438','Coupon_H2150-727879934','Coupon_TCO125Q2FY21-727929437','Coupon_TCO75Q2FY21-727929436','Coupon_TCO25Q2FY21-727929435','Coupon_AH50-727916434','Coupon_APBL_10-727923934','Coupon_APBL_5-727924434','Coupon_20BLAC-727838435','Coupon_10BLAC-727838434','Coupon_HPD219_2-727600467','Coupon_EVGET1-727609934','Coupon_EVGET3-727693936','Coupon_SAVETWENTY_7-727873934','Coupon_EVGET2-727609935','Coupon_GCQ219-727595937','Coupon_EVGET4-727693937','Coupon_SAVETWENTY_6-727777944');