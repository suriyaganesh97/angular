
SELECT
  tgt.identifier,
  rlus.identifier,
  tgt.field4,
  tgt.atchtgt_id,
  ast.atchastpath
FROM
 atchtgt tgt
INNER JOIN atchrel rel
ON
  tgt.atchtgt_id=rel.atchtgt_id
INNER JOIN atchrlus rlus
ON
  rel.atchrlus_id=rlus.atchrlus_id
inner join atchast ast
on
  ast.atchtgt_id=tgt.atchtgt_id
WHERE
  rel.bigintobject_id=
  (
    SELECT
      catentry_id
    FROM
      catentry
    WHERE
      partnumber='OMEN_KB_Monitor_Kit'
    
  );
  
  
  select * from hp_batchjobparams  where job_id=1000 and pname='pdb.catalog.deltaImagesCycleId';
  
  select * from atchrel  where atchtgt_id in ('893744');