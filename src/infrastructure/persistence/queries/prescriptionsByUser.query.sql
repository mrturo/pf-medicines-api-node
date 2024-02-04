select 
  pre.mpre_id, 
  pre.mpre_active, 
  pre.mpre_date, 
  pre.mpre_is_self_medicated, 
  pre.mtyp_id, 
  pre.mfre_id 
from 
  public.pf_med_prescription pre 
where 
  pre.user_id = $1 
order by 
  pre.mtyp_id asc, 
  pre.mpre_date desc;
