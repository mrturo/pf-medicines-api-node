select
  fr.mfre_id,
  fr.mfre_every_hours,
  fr.mfre_quantity
from
  public.pf_med_frecuency fr
where
  fr.mfre_id = $1
order by
  fr.mfre_id asc;